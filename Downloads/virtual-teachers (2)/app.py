# Virtual Teachers - Hugging Face Space
# تطبيق معلمين افتراضيين باستخدام Hugging Face
import gradio as gr
import os
from typing import List, Tuple
import time

# إعداد المتغيرات
HF_TOKEN = os.getenv("HF_TOKEN", "")
DEFAULT_MODEL = "meta-llama/Llama-3.2-3B-Instruct"

# قائمة النماذج المجانية المتاحة
AVAILABLE_MODELS = [
    "meta-llama/Llama-3.2-3B-Instruct",
    "microsoft/DialoGPT-medium", 
    "google/gemma-2b-it",
    "HuggingFaceH4/zephyr-7b-beta",
    "mistralai/Mixtral-8x7B-Instruct-v0.1"
]

# إعداد عملاء Hugging Face
from huggingface_hub import InferenceClient

class VirtualTeacher:
    def __init__(self, model_name: str):
        self.model_name = model_name
        self.client = InferenceClient(model_name, token=HF_TOKEN)
        self.conversation_history = []
        
    def generate_response(self, message: str, teacher_type: str = "general") -> str:
        """توليد رد من المعلم الافتراضي"""
        
        # إعداد السياق حسب نوع المعلم
        teacher_contexts = {
            "math": """أنت معلم رياضيات خبير ومتميز. مهمتك هي:
- شرح المفاهيم الرياضية بطريقة واضحة ومبسطة
- استخدام أمثلة عملية من الحياة اليومية
- تقديم حلول مفصلة خطوة بخطوة
- تشجيع الطالب على فهم المنطق وراء العمليات الحسابية""",
            
            "science": """أنت معلم علوم متميز وشغوف. تهدف إلى:
- شرح الظواهر العلمية والتجارب بطريقة شيقة ومفهومة
- ربط العلم بالحياة العملية والتطبيقات الحديثة
- تحفيز حب الاستطلاع والتفكير العلمي
- تبسيط المفاهيم المعقدة بأمثلة واضحة""",
            
            "language": """أنت معلم لغة عربية محترف ومتخصص. رسالتك هي:
- تعليم قواعد النحو والصرف والإملاء بوضوح
- تقديم أمثلة من الأدب والشعر العربي الأصيل
- تصحيح الأخطاء بطريقة بناءة ومشجعة
- إثراء المفردات وتحسين التعبير""",
            
            "english": """أنت معلم لغة إنجليزية ماهر ومتمكن. هدفك هو:
- تعليم قواعد اللغة الإنجليزية بطريقة تفاعلية
- تحسين مهارات المحادثة والكتابة
- تقديم نصائح عملية لتطوير اللغة
- شرح الاختلافات الثقافية واللغوية""",
            
            "history": """أنت معلم تاريخ شغوف ومطلع. مهمتك هي:
- سرد الأحداث التاريخية بطريقة مشوقة وممتعة
- ربط التاريخ بالواقع المعاصر والدروس المستفادة
- تحليل أسباب ونتائج الأحداث التاريخية
- تقديم منظور متوازن وموضوعي للأحداث""",
            
            "general": """أنت معلم متعدد التخصصات ومتميز، تساعد الطلاب في مختلف المواضيع التعليمية.
- تتكيف مع موضوع السؤال وتقدم إجابات شاملة
- تستخدم طرق تعليمية متنوعة حسب الحاجة
- تشجع على التفكير النقدي والتعلم المستمر
- تقدم مصادر إضافية للتوسع في المعرفة"""
        }
        
        system_prompt = teacher_contexts.get(teacher_type, teacher_contexts["general"])
        
        # إنشاء الرسالة مع السياق
        formatted_message = f"""{system_prompt}

الطالب يسأل: {message}

قدم إجابة تعليمية واضحة ومفيدة ومفصلة باللغة العربية:"""
        
        try:
            # استخدام Inference API
            response = self.client.text_generation(
                formatted_message,
                max_new_tokens=600,
                temperature=0.7,
                top_p=0.9,
                repetition_penalty=1.1,
                stop_sequences=["الطالب:", "المعلم:", "السؤال:", "الإجابة:"]
            )
            
            # تنظيف الرد
            if isinstance(response, str):
                clean_response = response.strip()
            else:
                clean_response = str(response).strip()
                
            # إزالة النص المكرر من البداية إذا وجد
            if clean_response.startswith(formatted_message):
                clean_response = clean_response[len(formatted_message):].strip()
                
            # إضافة للتاريخ
            self.conversation_history.append({
                "user": message,
                "assistant": clean_response,
                "timestamp": time.time(),
                "teacher_type": teacher_type
            })
            
            return clean_response
            
        except Exception as e:
            error_msg = f"عذراً، حدث خطأ في التواصل مع المعلم. يرجى المحاولة مرة أخرى.\nتفاصيل الخطأ: {str(e)}"
            return error_msg
    
    def clear_history(self):
        """مسح تاريخ المحادثة"""
        self.conversation_history = []

# إنشاء معلم افتراضي
teacher = VirtualTeacher(DEFAULT_MODEL)

def chat_with_teacher(message: str, teacher_type: str, history: List[Tuple[str, str]]) -> Tuple[str, List[Tuple[str, str]]]:
    """دالة المحادثة مع المعلم"""
    if not message.strip():
        return "", history
    
    # توليد الرد
    response = teacher.generate_response(message, teacher_type)
    
    # إضافة للتاريخ
    history.append((message, response))
    
    return "", history

def change_model(model_name: str):
    """تغيير النموذج المستخدم"""
    global teacher
    try:
        teacher = VirtualTeacher(model_name)
        return f"✅ تم تغيير النموذج إلى: {model_name}"
    except Exception as e:
        return f"❌ خطأ في تغيير النموذج: {str(e)}"

def clear_conversation():
    """مسح المحادثة"""
    teacher.clear_history()
    return []

# إعداد CSS مخصص
custom_css = """
.gradio-container {
    direction: rtl;
    text-align: right;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.gr-button {
    background: linear-gradient(45deg, #4CAF50, #45a049);
    color: white;
    border: none;
    border-radius: 12px;
    padding: 10px 20px;
    font-weight: bold;
    transition: all 0.3s ease;
}

.gr-button:hover {
    background: linear-gradient(45deg, #45a049, #4CAF50);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.gr-textbox {
    border-radius: 12px;
    border: 2px solid #e0e0e0;
    transition: border-color 0.3s ease;
}

.gr-textbox:focus {
    border-color: #4CAF50;
    box-shadow: 0 0 10px rgba(76, 175, 80, 0.3);
}

.teacher-card {
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    border-radius: 15px;
    padding: 20px;
    margin: 10px 0;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.chatbot {
    border-radius: 15px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
"""

# واجهة Gradio الرئيسية
with gr.Blocks(
    title="المعلمين الافتراضيين - Virtual Teachers",
    theme=gr.themes.Soft(),
    css=custom_css
) as app:
    
    gr.HTML("""
    <div style="text-align: center; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 15px; margin-bottom: 20px;">
        <h1 style="color: white; margin: 0; font-size: 2.5em;">🎓 المعلمين الافتراضيين</h1>
        <p style="color: white; margin: 10px 0 0 0; font-size: 1.2em;">منصة تعليمية تفاعلية مدعومة بالذكاء الاصطناعي</p>
    </div>
    """)
    
    gr.Markdown("""
    **مرحباً بك في منصة المعلمين الافتراضيين!** 🚀
    
    اختر نوع المعلم المناسب لموضوعك واطرح أسئلتك التعليمية. يمكنك الحصول على مساعدة في:
    - 🔢 **الرياضيات**: الجبر، الهندسة، الحساب، الإحصاء
    - 🔬 **العلوم**: الفيزياء، الكيمياء، الأحياء، علوم الأرض
    - 📖 **اللغة العربية**: النحو، الإملاء، الأدب، البلاغة
    - 🇺🇸 **اللغة الإنجليزية**: القواعد، المفردات، المحادثة
    - 🏛️ **التاريخ**: التاريخ الإسلامي، العالمي، الحضارات
    - 📚 **مواضيع عامة**: أي موضوع تعليمي آخر
    """)
    
    with gr.Row():
        with gr.Column(scale=3):
            # منطقة المحادثة الرئيسية
            chatbot = gr.Chatbot(
                label="💬 المحادثة مع المعلم",
                height=500,
                show_label=True,
                avatar_images=("👨‍🎓", "🤖"),
                bubble_full_width=False,
                show_copy_button=True,
                elem_classes=["chatbot"]
            )
            
            with gr.Row():
                msg = gr.Textbox(
                    label="✍️ اكتب سؤالك هنا",
                    placeholder="مثال: اشرح لي قانون نيوتن الثاني في الفيزياء...",
                    lines=3,
                    scale=4
                )
                
                with gr.Column(scale=1):
                    send_btn = gr.Button("📤 إرسال", variant="primary", size="lg")
                    clear_btn = gr.Button("🗑️ مسح", variant="secondary")
        
        with gr.Column(scale=1):
            # لوحة الإعدادات والتحكم
            gr.Markdown("### ⚙️ إعدادات المعلم")
            
            teacher_type = gr.Dropdown(
                choices=[
                    ("رياضيات 🔢", "math"),
                    ("علوم 🔬", "science"), 
                    ("لغة عربية 📖", "language"),
                    ("لغة إنجليزية 🇺🇸", "english"),
                    ("تاريخ 🏛️", "history"),
                    ("عام 📚", "general")
                ],
                value="general",
                label="نوع المعلم",
                interactive=True
            )
            
            model_selector = gr.Dropdown(
                choices=AVAILABLE_MODELS,
                value=DEFAULT_MODEL,
                label="نموذج الذكاء الاصطناعي",
                interactive=True
            )
            
            model_status = gr.Textbox(
                label="حالة النموذج",
                value=f"النموذج الحالي: {DEFAULT_MODEL}",
                interactive=False,
                lines=2
            )
            
            gr.Markdown("""
            ### 📋 معلومات النماذج
            
            **النماذج المتاحة:**
            - 🦙 **Llama 3.2**: سريع وذكي، مناسب للمحادثات العامة
            - 💬 **DialoGPT**: متخصص في المحادثات الطبيعية
            - 💎 **Gemma**: خفيف وسريع، موفر للموارد
            - ⚡ **Zephyr**: متوازن بين السرعة والجودة
            - 🚀 **Mixtral**: الأقوى والأكثر تقدماً
            
            **مميزات:**
            - 🆓 مجاني 100%
            - 🔒 آمن وخاص
            - 🌐 يعمل في المتصفح
            - ⚡ استجابة سريعة
            """)
      # ربط الأحداث والوظائف
    send_btn.click(
        chat_with_teacher,
        inputs=[msg, teacher_type, chatbot],
        outputs=[msg, chatbot],
        show_progress="minimal"
    )
    
    msg.submit(
        chat_with_teacher,
        inputs=[msg, teacher_type, chatbot],
        outputs=[msg, chatbot],
        show_progress="minimal"
    )
    
    clear_btn.click(
        clear_conversation,
        outputs=[chatbot]
    )
    
    model_selector.change(
        change_model,
        inputs=[model_selector],
        outputs=[model_status]
    )

# تشغيل التطبيق
if __name__ == "__main__":
    import os
    
    # التحقق من بيئة Hugging Face Spaces
    is_huggingface_space = os.getenv("SPACE_ID") is not None
    
    if is_huggingface_space:
        # إعدادات خاصة بـ Hugging Face Spaces
        app.launch(
            share=True,
            show_error=True,
            debug=False
        )
    else:
        # إعدادات محلية
        app.launch(
            server_name="0.0.0.0",
            server_port=7860,
            share=True,
            show_error=True,
            debug=False
        )

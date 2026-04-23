const fs = require('fs');

let indexHtml = fs.readFileSync('index.html', 'utf8');
const oldHtml = fs.readFileSync('scratch/sections_raw.html', 'utf8');

// I will just use a sophisticated regex or manual string replacement to parse the oldHtml.
// Or wait, since oldHtml is available, I can just write the translations here in the script.

const newSectionsHtml = `
    <!-- About Divider -->
    <div class="about-divider" id="aboutDivider" aria-hidden="true">
      <img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBuefL6IUnYfw-kwh_Gk70VXLrpCoqPHP7xMBNw8d5xSEM_UhyphenhyphenpbJTIlL4-Yu3S_Xc8SXJbjzfhhjXahaSspEkQY8MS2LyC3eqbofEuZE0dAAUHo21AyBS0FYzY_0vi_KVzvKvjp1QIQGs64P-V6e4aAX-xy79Ny9P7nz7MQQHOW0YzFZLonj16dDFxh56/s1600/606381728_4170805289900633_2026609396409243936_n%20%282%29.jpg"
        alt="Mohamed Shaban El-Atmani Achievements"
        loading="lazy"
      />
    </div>

    <!-- Professional Experience Section (Timeline) -->
    <section class="section section-alt" id="experience">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">
          <span class="lang-en">Professional <span class="gradient-text">Experience</span></span>
          <span class="lang-ar">المسار <span class="gradient-text">المهني</span></span>
        </h2>
        <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          <span class="lang-en">A journey integrating digital policies, engineering, and entrepreneurship</span>
          <span class="lang-ar">رحلة تكامل الخبرات: بين السياسات الرقمية، والهندسة، وريادة الأعمال</span>
        </p>

        <div class="experience-media" data-aos="fade-up" data-aos-delay="150">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWZz5OrLclzR6MBk-bXn9fo4xyNNfvf7nYRJ6W9mySs8tPeWHSGiRLKv207csQnDXI_aXU1Uy2OvpTA6dB38yEtMCGi3shdt5v7Nay_QL-18mN4JsnSZyvq1oe-Lw-AZ547OJ_3SuEVFhIyoWpeF6eOeBrpXx9f5NFt7NGigMwNC4TomjjxGK3afFc1XVO/s1600/12.png"
            alt="With Minister of Youth and Sports"
            loading="lazy"
          />
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiLpDUzWq2DVZtX1o7Fd3lNEkDzU1LiIJfRnRuo8LeKosBvfRGTu5ofSBKx7G2JBXBjLYS6S4UEnxbICTJHa3FFy4NxzLaE7Yup0X21fCPRMhBumtuOMYD4My1MFYYPNGpiPsEtZGGFW0LNm1nhD5oHHxRVkA7quSHlzpjomPU4usqKpaCFRa72ySZ6_-Ex/s1600/photo_14_2026-01-22_20-53-02.jpg"
            alt="With Deputy Minister of Communications"
            loading="lazy"
          />
        </div>

        <div class="timeline">
          <!-- RoboVAI -->
          <div class="timeline-item" data-aos="fade-right">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h3 class="timeline-title">Founder & Digital Project Manager</h3>
              <p class="timeline-org">RoboVAI - Intelligent Solutions</p>
              <p class="timeline-desc">
                <span class="lang-en">Leading a startup specializing in digital transformation and AI solutions. Managing the lifecycle of SaaS products and leading teams to develop solutions for public and private sectors.</span>
                <span class="lang-ar">قيادة شركة ناشئة متخصصة في حلول التحول الرقمي والذكاء الاصطناعي. إدارة دورة حياة المنتجات الرقمية (SaaS) وقيادة فرق العمل لتطوير حلول تخدم القطاعين الحكومي والخاص.</span>
              </p>
            </div>
          </div>

          <!-- MCIT Researcher -->
          <div class="timeline-item" data-aos="fade-left">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h3 class="timeline-title">Researcher - Institutional Development</h3>
              <p class="timeline-org">Technical Office of the Deputy Minister (MCIT)</p>
              <p class="timeline-desc">
                <span class="lang-en">Researcher at the Technical Office of the Deputy Minister for Digital Transformation and Institutional Development. Contributing to monitoring KPIs for national projects, supporting decision-making, and coordinating government digital transformation initiatives.</span>
                <span class="lang-ar">باحث بالمكتب الفني لنائب وزير الاتصالات للتحول الرقمي والتطوير المؤسسي. المساهمة في متابعة مؤشرات الأداء للمشروعات القومية، ودعم اتخاذ القرار وتنسيق مبادرات التحول الرقمي الحكومية.</span>
              </p>
            </div>
          </div>

          <!-- Omal Misr Complex -->
          <div class="timeline-item" data-aos="fade-right">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h3 class="timeline-title">
                AI Engineer & Digital Transformation Specialist
              </h3>
              <p class="timeline-org">Omal Misr Complex</p>
              <p class="timeline-desc">
                <span class="lang-en">Leading digital transformation projects and improving operational efficiency. Analyzing workflows, implementing intelligent solutions, and employing data analysis to support decision-making.</span>
                <span class="lang-ar">قيادة مشاريع التحول الرقمي وتحسين الكفاءة التشغيلية. تحليل سير العمل وتنفيذ حلول ذكية وتوظيف تحليل البيانات لدعم اتخاذ القرار.</span>
              </p>
            </div>
          </div>

          <!-- Merkato -->
          <div class="timeline-item" data-aos="fade-left">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h3 class="timeline-title">Product Operations & Growth Lead</h3>
              <p class="timeline-org">Merkato Industrial Platform</p>
              <p class="timeline-desc">
                <span class="lang-en">Launching the platform from scratch (0 to 1), developing Go-To-Market (GTM) strategy, and winning the GESR startup competition for SaaS.</span>
                <span class="lang-ar">إطلاق المنصة من الصفر (0 to 1)، تطوير استراتيجية الدخول للسوق (GTM)، والفوز بجائزة مسابقة جسر (GESR) للشركات الناشئة (SaaS).</span>
              </p>
            </div>
          </div>

          <!-- Techno Egypt -->
          <div class="timeline-item" data-aos="fade-right">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h3 class="timeline-title">General Coordinator</h3>
              <p class="timeline-org">Techno Egypt Initiative</p>
              <p class="timeline-desc">
                <span class="lang-en">An initiative under the Tahya Misr Youth Union sponsored by the Ministry of Youth and Sports. Responsible for planning and managing training programs to prepare youth for the tech job market.</span>
                <span class="lang-ar">مبادرة تابعة لاتحاد شباب تحيا مصر تحت رعاية وزارة الشباب والرياضة. مسؤول عن تخطيط وإدارة برامج التدريب لتأهيل الشباب لسوق العمل التكنولوجي.</span>
              </p>
            </div>
          </div>

          <!-- DECI -->
          <div class="timeline-item" data-aos="fade-left">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h3 class="timeline-title">Program Coordinator</h3>
              <p class="timeline-org">Digital Egypt Cubs Initiative (DECI)</p>
              <p class="timeline-desc">
                <span class="lang-en">Coordinating student groups and collaborating with trainers to ensure the success of the educational process in the Digital Egypt Cubs Initiative.</span>
                <span class="lang-ar">تنسيق مجموعات الطلاب والتعاون مع المدربين لضمان نجاح العملية التعليمية في مبادرة أشبال مصر الرقمية.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Political & Public Work Section -->
    <section class="section" id="public-work">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">
          <span class="lang-en">Public <span class="gradient-text">Work</span></span>
          <span class="lang-ar">مسيرة <span class="gradient-text">العمل العام</span></span>
        </h2>
        <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          <span class="lang-en">A journey of youth leadership - from Student Union to the National level</span>
          <span class="lang-ar">رحلة من العمل السياسي والشبابي - من اتحاد الطلبة للعمل على المستوى القومي</span>
        </p>

        <div class="exp-grid">
          <!-- Tahya Misr -->
          <div class="exp-card" data-aos="fade-up" data-aos-delay="100">
            <div class="exp-card-header">
              <div class="exp-card-icon"><i class="fas fa-flag"></i></div>
              <div>
                <h4 class="exp-card-title"><span class="lang-en">Tahya Misr Youth Union</span><span class="lang-ar">اتحاد شباب تحيا مصر</span></h4>
                <p class="exp-card-org">2020 - 2024</p>
              </div>
            </div>
            <p class="exp-card-desc">
              <span class="lang-en">Vice Chairman of the Central Training Committee and Giza Governorate Coordinator. Working on developing and empowering youth in the governorate. A youth entity under the Ministry of Youth and Sports.</span>
              <span class="lang-ar">نائب رئيس لجنة التدريب مركزياً ومنسق محافظة الجيزة. العمل على تطوير وتأهيل الشباب في المحافظة. كيان شبابي تابع لوزارة الشباب والرياضة (قرار وزاري 1159 لسنة 2025).</span>
            </p>
          </div>

          <!-- Student Union -->
          <div class="exp-card" data-aos="fade-up" data-aos-delay="200">
            <div class="exp-card-header">
              <div
                class="exp-card-icon"
                style="background: var(--gradient-accent)"
              >
                <i class="fas fa-university"></i>
              </div>
              <div>
                <h4 class="exp-card-title"><span class="lang-en">Student Union President</span><span class="lang-ar">رئيس اتحاد الطلاب</span></h4>
                <p class="exp-card-org"><span class="lang-en">City of Culture and Science</span><span class="lang-ar">مدينة الثقافة والعلوم</span></p>
              </div>
            </div>
            <p class="exp-card-desc">
              <span class="lang-en">Advocating for student rights and organizing cultural and scientific events.</span>
              <span class="lang-ar">الدفاع عن حقوق الطلاب وتنظيم الفعاليات الثقافية والعلمية.</span>
            </p>
          </div>

          <!-- National Council -->
          <div class="exp-card" data-aos="fade-up" data-aos-delay="300">
            <div class="exp-card-header">
              <div
                class="exp-card-icon"
                style="background: linear-gradient(135deg, #48dbfb, #0abde3)"
              >
                <i class="fas fa-users-cog"></i>
              </div>
              <div>
                <h4 class="exp-card-title"><span class="lang-en">National Youth Council</span><span class="lang-ar">المجلس الوطني للشباب</span></h4>
                <p class="exp-card-org">Civil Society Foundation</p>
              </div>
            </div>
            <p class="exp-card-desc">
              <span class="lang-en">Civil society foundation (No. 812) ISO 9001 certified. Member of the council to contribute to building and developing the minds of Egyptian youth.</span>
              <span class="lang-ar">مؤسسة مجتمع مدني (رقم 812) حاصلة على أيزو 9001. عضو بالمجلس للمساهمة في بناء وتنمية عقول الشباب المصري.</span>
            </p>
          </div>

          <!-- Digital Inclusion -->
          <div class="exp-card" data-aos="fade-up" data-aos-delay="350">
            <div class="exp-card-header">
              <div
                class="exp-card-icon"
                style="background: linear-gradient(135deg, #ff9ff3, #feca57)"
              >
                <i class="fas fa-wifi"></i>
              </div>
              <div>
                <h4 class="exp-card-title"><span class="lang-en">Digital Inclusion Unit</span><span class="lang-ar">وحدة الشمول الرقمي</span></h4>
                <p class="exp-card-org"><span class="lang-en">Ministry of Youth and Sports</span><span class="lang-ar">وزارة الشباب والرياضة</span></p>
              </div>
            </div>
            <p class="exp-card-desc">
              <span class="lang-en">Unit member, contributing to drafting and implementing policies for youth digital empowerment and expanding technological knowledge.</span>
              <span class="lang-ar">عضو الوحدة، المساهمة في رسم وتنفيذ سياسات تمكين الشباب رقمياً وتوسيع نطاق المعرفة التكنولوجية.</span>
            </p>
          </div>

          <!-- IEEE -->
          <div class="exp-card" data-aos="fade-up" data-aos-delay="400">
            <div class="exp-card-header">
              <div
                class="exp-card-icon"
                style="background: linear-gradient(135deg, #a29bfe, #6c5ce7)"
              >
                <i class="fas fa-network-wired"></i>
              </div>
              <div>
                <h4 class="exp-card-title">IEEE Active Member</h4>
                <p class="exp-card-org">IEEE Egypt | RAS | CS</p>
              </div>
            </div>
            <p class="exp-card-desc">
              <span class="lang-en">Active member in Robotics and Software societies. Participating in providing training for important areas in the tech job market and entrepreneurship.</span>
              <span class="lang-ar">عضو فعال في جمعية الروبوتات والبرمجيات. المشاركة في توفير تدريبات لمجالات مهمة في سوق العمل التكنولوجي وريادة الأعمال.</span>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Techno Egypt Section -->
    <section class="section techno-section" id="techno-egypt">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">
          🤖 <span class="lang-en">Techno Egypt <span class="gradient-text">Initiative</span></span><span class="lang-ar">مبادرة <span class="gradient-text">Techno Egypt</span></span>
        </h2>
        <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          <span class="lang-en">An EdTech initiative to equip youth with technology and entrepreneurship skills</span>
          <span class="lang-ar">مبادرة EdTech لتأهيل الشباب بمهارات التكنولوجيا وريادة الأعمال</span>
        </p>

        <div class="techno-grid">
          <div class="techno-content" data-aos="fade-right">
            <h3><span class="lang-en">Empowering Youth in the Job Market</span><span class="lang-ar">تمكين الشباب في سوق العمل</span></h3>
            <p>
              <span class="lang-en">Techno Egypt has exerted a promising youth effort aimed at all those interested in the world of technology. The initiative aimed to train and empower youth in technological fields across various job markets.</span>
              <span class="lang-ar">بذلت Techno Egypt جهداً شبابياً واعداً موجهاً لكل المهتمين بعالم التكنولوجيا. المبادرة كانت تهدف لتدريب وتمكين الشباب في المجالات التكنولوجية في أسواق العمل المختلفة.</span>
            </p>

            <div
              style="
                background: rgba(255, 255, 255, 0.05);
                padding: 15px;
                border-radius: 10px;
                margin-bottom: 20px;
              "
            >
              <p style="margin-bottom: 10px; color: var(--light)">
                <strong>🌟 <span class="lang-en">Vision:</span><span class="lang-ar">الرؤية:</span></strong>
                <span class="lang-en">Empowering and nurturing youth talents, enabling them to excel in facing technological challenges, and ultimately contributing to making Egypt technologically advanced.</span>
                <span class="lang-ar">تمكين ورعاية مواهب الشباب، وتمكينهم من التفوق في مواجهة التحديات التكنولوجية، والمساهمة في نهاية المطاف لتصبح مصر متقدمة تكنولوجياً.</span>
              </p>
              <p style="margin: 0; color: var(--light)">
                <strong>🚀 <span class="lang-en">Mission:</span><span class="lang-ar">الرسالة:</span></strong>
                <span class="lang-en">Guiding youth towards excellence in technology and engineering, providing specialized training and scholarships, opportunities to participate in international competitions, and promoting education, innovation, and environmental sustainability.</span>
                <span class="lang-ar">توجيه الشباب نحو التميز في التكنولوجيا والهندسة، وتقديم التدريب المتخصص والمنح الدراسية وفرصة المشاركة في المسابقات الدولية، وتعزيز التعليم والابتكار والاستدامة البيئية.</span>
              </p>
            </div>

            <div class="techno-features">
              <div class="techno-feature">
                <div class="techno-feature-icon">
                  <i class="fas fa-microchip"></i>
                </div>
                <div class="techno-feature-text">
                  <h4><span class="lang-en">High-Quality Training</span><span class="lang-ar">تدريبات عالية الجودة</span></h4>
                  <p><span class="lang-en">Training in important fields in the tech job market and entrepreneurship</span><span class="lang-ar">تدريبات في مجالات مهمة بسوق العمل التكنولوجي وريادة الأعمال</span></p>
                </div>
              </div>
              <div class="techno-feature">
                <div class="techno-feature-icon">
                  <i class="fas fa-tools"></i>
                </div>
                <div class="techno-feature-text">
                  <h4><span class="lang-en">Workshops & Activities</span><span class="lang-ar">ورش عمل وأنشطة</span></h4>
                  <p><span class="lang-en">Various events to develop technical skills</span><span class="lang-ar">فعاليات متنوعة لتطوير المهارات التقنية</span></p>
                </div>
              </div>
              <div class="techno-feature">
                <div class="techno-feature-icon">
                  <i class="fas fa-handshake"></i>
                </div>
                <div class="techno-feature-text">
                  <h4><span class="lang-en">Specialized Partnerships</span><span class="lang-ar">شراكات متخصصة</span></h4>
                  <p><span class="lang-en">Collaboration with tech entities and institutions</span><span class="lang-ar">تعاون مع جهات ومؤسسات تقنية</span></p>
                </div>
              </div>

              <a
                href="https://www.facebook.com/search/top?q=techno%20egypt"
                target="_blank"
                class="btn btn-outline"
                style="margin-top: 20px"
              >
                <i class="fab fa-facebook"></i> <span class="lang-en">Follow Techno Egypt</span><span class="lang-ar">تابع Techno Egypt</span>
              </a>
            </div>
          </div>

          <div class="techno-gallery" data-aos="fade-left">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgVNnUlBd-oLYX6jf7cH-iJjm8hNt5ZFjh7L3V5nr7ogQ3QkO2TI75Y464bwAFnpA8oU_jUkbgPac4dDFZBEg9hXvO1r4bUSMVqiuHPztr5Qum2m7CT5N6jqG5mnabfq1v74XLSe_UNQi-hnbvsWhIYujCehpPK3Cdwptxk7HV5hG_0-0JHYA4bUNCg5pRM/s320/p1-140.png" loading="lazy" alt="Techno Egypt" />
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhxlF0srLrc_cFytQGzgFbVA8P-HisyIZQeMnv6MBdLLpSIjycbivhLmJtsxBTAuWRch3d8rqZ77l0ng5RPbawuJsAUErcdQHdjuRbEdJaT4ZmFFFvtzybBrQ40WgknI1PRMr43L_1IbXJxB9rkVCWj9gVZKvU8BY5UWLqYrfLZJbOWcfYSh0Q2fbC170Sj/s320/p2-141.png" loading="lazy" alt="Techno Egypt" />
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1zRXZ8pgE27Bv8RoQ69R_CAujAeMXf8VTUzBU-stZMmytx3Nn4iRMHgRJCGptJUQLD3ntdwWYGKAPnhFHlODsQX0HtQNqI1FyQDzQ8mPco6rO1Hwfb6L-z9qKFsml5Nc0RW1BT81b-6v9NLjR1X73xkroOUlU0-LsVk7mwvzHuq8QFpZiQBld8mdHhU5u/s320/p4-143.png" loading="lazy" alt="Techno Egypt" />
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZMcJG6JL8ix1OY-Qf1W9sMqqELedOkt7ddHkEQ8sjJ_h1Qpk9w3mKmhmNsOUM7s4NtjD-7hXOLbgnba2ALcQBMmyX-KWtAYs0zIfFXIqehuZ07lNQ3chznlhFxOGMCeLay0MTb8C79pNYJBokiNviBZxya66D0sJF1CHPHNcvbpEXUec8vBy5I73Mk538/s320/p5-144.png" loading="lazy" alt="Techno Egypt" />
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgrFw8FgvSWHwHBc6mTwPgboNbUsGib3kqNojJ4m-ZGcsaz4orW5847ahP0KKxwaefUwV93TL3PWuheAgoAkx2iMvvVr5_RzevtMLfUSVYhxdJA8C1VgDcFeBoFzP9RWe7PT4YqKcJpYPOK2lr3zfC8Tu5GjkYmUCLRTDEf-7GATQbBSZN13YCZjkzlLPnv/s320/p8-147.png" loading="lazy" alt="Techno Egypt" />
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhkL2RecRxkLGS7LO4sHmziVJP2M_1cppbKJeyPcBFCMWc5ropm5LxxqeKmxWYrpjNsf40pGbGb9dRnHsgZbtidr0yzJ3OvkhCA7hBRw-7fbpCeFAlw7Sk7YRyyBLRU8Ysx4RA_z3BKE-ErzIFOTUGKxrBQNoXRoaA8D7R9y7JyqiQTNbAJ2L3G5-51m0bw/s320/p9-148.png" loading="lazy" alt="Techno Egypt" />
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi4Dm-UklLhjW6XkMNCdRfjCuc7YxbLbQjLWuD7N8bJTG2QkdQwo2CMfMP-xfEhEp8WT0RviCsWZaA-CTv_fN0DSrRl0s3VNh5JlJOgeAp8uCvOr-8p_zlHnQm0wcBr54pV_WEDN50rFUO1lkapkG4y9mW020AQyHiRVyQKSvdjtCmJmTbMqYxIt_DoI8f0/s320/p10-149.png" loading="lazy" alt="Techno Egypt" />
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhR7QrAO-3h5BaFQwpeI6QQNbsqexFM2sc7bvXB-HTPBLMVGdp5ef3BylXU_KcceqWlOW6sbFeWj-plg4aJtuUV6fK1jZ5cB-QIqzBqNikKgQ2Nn_dYKqGIvpupBZ0ngd54sKHxONG5dqTB3sw-aYJUcjssRLAHnhv_1_2w0DXemFdN03CaLh_OvP8ndPjG/s320/p11-150.png" loading="lazy" alt="Techno Egypt" />
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGUIjqTIrIZlVyFPmhHuCH6VK1bkwDK0BXutrFpPOv-In2Hq8kAcNz2dcUafD6HYU1Ibmw2Uz837kNqsaRFoRW51myUot8GCC87SzO5DbYJvWrEhD49m_AgADARy9WRQneLMQ6uhjCLb6C3qng3lvySVl7VQnKo7Reeyi3GjNfISpyg4OHTMmjiSHPC0so/s320/p12-151.png" loading="lazy" alt="Techno Egypt" />
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications Section -->
    <section class="section section-alt" id="certifications">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">
          <span class="lang-en">Certifications & <span class="gradient-text">Programs</span></span>
          <span class="lang-ar">الشهادات <span class="gradient-text">والبرامج</span></span>
        </h2>
        <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          <span class="lang-en">Government & Presidential Programs + Certified Tech Credentials</span>
          <span class="lang-ar">برامج حكومية ورئاسية + شهادات تقنية معتمدة</span>
        </p>

        <!-- Certifications Hero Image -->
        <div class="cert-hero-image" data-aos="fade-up" style="margin-bottom: 2rem; border-radius: 15px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiZG3Jni1JA64fnSKpLVF56gfg9wHYFGagjaX_rxvVBQg78CVurApZbfeEaJOn-gm9WjOpFsyrvP1tG8noLWTyvXwfnw1wb5WAZ4tc1hVuaJWpOtCRQ5msCvP9Y0QrXYUhKNXSzEc6iuv_TNApdTiDppswS1S6RgbdZQgaWAj7VsgucxvRxeqEoqUqIkd77/s1600/IMG-20251015-WA0585.jpg" alt="Certificates and Awards" style="width: 100%; height: auto; display: block;">
        </div>

        <div class="cert-grid">
          <div class="cert-card" data-aos="fade-up" data-aos-delay="100">
            <div class="cert-icon" style="background: var(--gradient-accent)"><i class="fas fa-user-tie"></i></div>
            <div class="cert-content">
              <h4><span class="lang-en">Ministry of Youth Cadres</span><span class="lang-ar">كوادر وزارة الشباب والرياضة</span></h4>
              <p><span class="lang-en">Police Research Center</span><span class="lang-ar">مركز بحوث الشرطة</span></p>
            </div>
          </div>
          <div class="cert-card" data-aos="fade-up" data-aos-delay="100">
            <div class="cert-icon"><i class="fas fa-brain"></i></div>
            <div class="cert-content">
              <h4>Huawei Certified ICT Associate (AI)</h4>
              <p>Huawei ICT Academy</p>
            </div>
          </div>
          <div class="cert-card" data-aos="fade-up" data-aos-delay="150">
            <div class="cert-icon" style="background: var(--gradient-accent)"><i class="fas fa-microchip"></i></div>
            <div class="cert-content">
              <h4><span class="lang-en">Certified Artificial Intelligence (AI)</span><span class="lang-ar">الذكاء الاصطناعي المعتمد</span></h4>
              <p>NTI-Huawei Egyptian Talents Academy (ETA)</p>
            </div>
          </div>
          <div class="cert-card" data-aos="fade-up" data-aos-delay="200">
            <div class="cert-icon"><i class="fas fa-magic"></i></div>
            <div class="cert-content">
              <h4><span class="lang-en">Generative AI Certificate (GAIC)</span><span class="lang-ar">شهادة الذكاء الاصطناعي التوليدي</span></h4>
              <p>Sprints / MCIT</p>
            </div>
          </div>
          <div class="cert-card" data-aos="fade-up" data-aos-delay="250">
            <div class="cert-icon" style="background: linear-gradient(135deg, #ffd700, #ffa500)"><i class="fas fa-chart-line"></i></div>
            <div class="cert-content">
              <h4><span class="lang-en">Financial Entrepreneurship</span><span class="lang-ar">ريادة الأعمال المالية</span></h4>
              <p><span class="lang-en">Chamber of Commerce</span><span class="lang-ar">الغرفة التجارية</span></p>
            </div>
          </div>
          <div class="cert-card" data-aos="fade-up" data-aos-delay="300">
            <div class="cert-icon"><i class="fas fa-industry"></i></div>
            <div class="cert-content">
              <h4><span class="lang-en">Digital Manufacturing & Design</span><span class="lang-ar">التصنيع الرقمي والتصميم</span></h4>
              <p><span class="lang-en">University at Buffalo</span><span class="lang-ar">جامعة بافالو</span></p>
            </div>
          </div>
          <div class="cert-card" data-aos="fade-up" data-aos-delay="350">
            <div class="cert-icon"><i class="fas fa-wifi"></i></div>
            <div class="cert-content">
              <h4><span class="lang-en">IoT & Embedded Systems</span><span class="lang-ar">إنترنت الأشياء والأنظمة المدمجة</span></h4>
              <p><span class="lang-en">University of California, Irvine</span><span class="lang-ar">جامعة كاليفورنيا - إرفاين</span></p>
            </div>
          </div>
          <div class="cert-card" data-aos="fade-up" data-aos-delay="400">
            <div class="cert-icon"><i class="fas fa-leaf"></i></div>
            <div class="cert-content">
              <h4><span class="lang-en">Certified Sustainable Development Ambassador</span><span class="lang-ar">سفير التنمية المستدامة المعتمد</span></h4>
              <p><span class="lang-en">Min. of Planning & Economic Dev.</span><span class="lang-ar">وزارة التخطيط والتنمية الاقتصادية</span></p>
            </div>
          </div>
          <div class="cert-card" data-aos="fade-up" data-aos-delay="450">
            <div class="cert-icon"><i class="fas fa-award"></i></div>
            <div class="cert-content">
              <h4>Value for Youth Cadres</h4>
              <p>NTA & Hayat Karima</p>
            </div>
          </div>
          <div class="cert-card" data-aos="fade-up" data-aos-delay="500">
            <div class="cert-icon"><i class="fas fa-user-check"></i></div>
            <div class="cert-content">
              <h4><span class="lang-en">Certified Digital Cadre</span><span class="lang-ar">الكادر الرقمي المعتمد</span></h4>
              <p>MCIT & Hayat Karima</p>
            </div>
          </div>
          <div class="cert-card" data-aos="fade-up" data-aos-delay="550">
            <div class="cert-icon"><i class="fas fa-users-cog"></i></div>
            <div class="cert-content">
              <h4><span class="lang-en">Leaders of the New Republic</span><span class="lang-ar">قادة الجمهورية الجديدة</span></h4>
              <p><span class="lang-en">Ministry of Youth and Sports</span><span class="lang-ar">وزارة الشباب والرياضة</span></p>
            </div>
          </div>
          <div class="cert-card" data-aos="fade-up" data-aos-delay="600">
            <div class="cert-icon"><i class="fas fa-lightbulb"></i></div>
            <div class="cert-content">
              <h4><span class="lang-en">Innovation & Sustainability</span><span class="lang-ar">الابتكار والاستدامة</span></h4>
              <p>Friedrich Naumann Foundation</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Honors & Media Section -->
    <section class="section">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">
          <span class="lang-en">Honors & <span class="gradient-text">Media</span></span>
          <span class="lang-ar">التكريمات <span class="gradient-text">والإعلام</span></span>
        </h2>
        <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          <span class="lang-en">Local and international official honors + Media appearances as a speaker on digital transformation</span>
          <span class="lang-ar">تكريمات رسمية محلية ودولية + ظهور إعلامي كمتحدث في التحول الرقمي</span>
        </p>

        <div class="exp-grid">
          <div class="exp-card" data-aos="fade-up" data-aos-delay="100">
            <div class="exp-card-header">
              <div class="exp-card-icon" style="background: linear-gradient(135deg, var(--gold), #ffaa00);"><i class="fas fa-shield-alt"></i></div>
              <div>
                <h4 class="exp-card-title"><span class="lang-en">Shield of Honor - Libyan Government</span><span class="lang-ar">درع تكريم - الحكومة الليبية</span></h4>
                <p class="exp-card-org"><span class="lang-en">Libyan Ministry of Labor</span><span class="lang-ar">وزارة العمل الليبية</span></p>
              </div>
            </div>
            <p class="exp-card-desc"><span class="lang-en">Official recognition for technical and strategic contributions.</span><span class="lang-ar">تكريم رسمي للمساهمات التقنية والاستراتيجية.</span></p>
          </div>
          <div class="exp-card" data-aos="fade-up" data-aos-delay="200">
            <div class="exp-card-header">
              <div class="exp-card-icon" style="background: linear-gradient(135deg, var(--gold), #ffaa00);"><i class="fas fa-award"></i></div>
              <div>
                <h4 class="exp-card-title"><span class="lang-en">Shield of Honor - Moroccan Government</span><span class="lang-ar">درع تكريم - الحكومة المغربية</span></h4>
                <p class="exp-card-org"><span class="lang-en">Kingdom of Morocco</span><span class="lang-ar">المملكة المغربية</span></p>
              </div>
            </div>
            <p class="exp-card-desc"><span class="lang-en">Recognition for contributions to technology and innovation.</span><span class="lang-ar">تقدير للمساهمات في مجال التكنولوجيا والابتكار.</span></p>
          </div>
          <div class="exp-card" data-aos="fade-up" data-aos-delay="300">
            <div class="exp-card-header">
              <div class="exp-card-icon" style="background: var(--gradient-primary)"><i class="fas fa-tv"></i></div>
              <div>
                <h4 class="exp-card-title"><span class="lang-en">Media Speaker - Egyptian Channels</span><span class="lang-ar">متحدث إعلامي - القنوات المصرية</span></h4>
                <p class="exp-card-org"><span class="lang-en">TV & Radio Appearances</span><span class="lang-ar">ظهور تلفزيوني وإذاعي</span></p>
              </div>
            </div>
            <p class="exp-card-desc">Nile Cultural, Ten TV, Nile News, Channel 2, Radio Misr - <span class="lang-en">Speaking on AI & Digital Transformation.</span><span class="lang-ar">كمتحدث في الذكاء الاصطناعي والتحول الرقمي.</span></p>
          </div>
          <div class="exp-card" data-aos="fade-up" data-aos-delay="400">
            <div class="exp-card-header">
              <div class="exp-card-icon" style="background: var(--gradient-accent)"><i class="fas fa-trophy"></i></div>
              <div>
                <h4 class="exp-card-title"><span class="lang-en">Misr El Kheir & ExxonMobil Award</span><span class="lang-ar">جائزة مصر الخير & ExxonMobil</span></h4>
                <p class="exp-card-org"><span class="lang-en">GESR SaaS Competition</span><span class="lang-ar">مسابقة GESR للـ SaaS</span></p>
              </div>
            </div>
            <p class="exp-card-desc"><span class="lang-en">Winning the award for Merkato B2B Industrial Platform.</span><span class="lang-ar">الفوز بالجائزة عن منصة Merkato للتداول الصناعي B2B.</span></p>
          </div>
        </div>
      </div>
    </section>
`;

let galleryHtml = oldHtml.substring(oldHtml.indexOf('<!-- Gallery Section -->'), oldHtml.length);
galleryHtml = galleryHtml.replace('لقطات من <span class="gradient-text">المسيرة</span>', '<span class="lang-en">Journey <span class="gradient-text">Highlights</span></span><span class="lang-ar">لقطات من <span class="gradient-text">المسيرة</span></span>');
galleryHtml = galleryHtml.replace('أرشيف مصور للفعاليات، المؤتمرات، واللقاءات الرسمية', '<span class="lang-en">Visual archive of events, conferences, and official meetings</span><span class="lang-ar">أرشيف مصور للفعاليات، المؤتمرات، واللقاءات الرسمية</span>');
galleryHtml = galleryHtml.replace('عرض الكل', '<span class="lang-en">All</span><span class="lang-ar">عرض الكل</span>');
galleryHtml = galleryHtml.replace('إعلام ومؤتمرات', '<span class="lang-en">Media & Conferences</span><span class="lang-ar">إعلام ومؤتمرات</span>');
galleryHtml = galleryHtml.replace('تكريمات', '<span class="lang-en">Awards</span><span class="lang-ar">تكريمات</span>');
galleryHtml = galleryHtml.replace('تدريب وفعاليات', '<span class="lang-en">Training & Events</span><span class="lang-ar">تدريب وفعاليات</span>');
galleryHtml = galleryHtml.replace('* دي مجرد مقتطفات من الرحلة، ولسه مكملين 🚀', '<span class="lang-en">* These are just highlights of the journey, and we are still going 🚀</span><span class="lang-ar">* دي مجرد مقتطفات من الرحلة، ولسه مكملين 🚀</span>');


// Now we combine everything and insert them into indexHtml.

const aboutIndex = indexHtml.indexOf('<!-- Core Capabilities -->');
const differentiatorIndex = indexHtml.indexOf('<!-- Contact Section -->');

indexHtml = indexHtml.slice(0, aboutIndex) + newSectionsHtml + '\\n' + indexHtml.slice(aboutIndex, differentiatorIndex) + galleryHtml + '\\n' + indexHtml.slice(differentiatorIndex);

// Also replace the navigation
const oldNav = `          <li><a href="#about">About</a></li>
          <li><a href="#capabilities">Capabilities</a></li>
          <li><a href="#robovai">RoboVAI</a></li>
          <li><a href="#contact" class="nav-cta">Partner With Me</a></li>`;

const newNav = `          <li><a href="#about"><span class="lang-en">About</span><span class="lang-ar">من أنا</span></a></li>
          <li><a href="#experience"><span class="lang-en">Experience</span><span class="lang-ar">المسار المهني</span></a></li>
          <li><a href="#public-work"><span class="lang-en">Public Work</span><span class="lang-ar">العمل العام</span></a></li>
          <li><a href="#capabilities"><span class="lang-en">Capabilities</span><span class="lang-ar">القدرات</span></a></li>
          <li><a href="#robovai"><span class="lang-en">RoboVAI</span><span class="lang-ar">روبوفاي</span></a></li>
          <li><a href="#gallery"><span class="lang-en">Gallery</span><span class="lang-ar">المعرض</span></a></li>
          <li><a href="#contact" class="nav-cta"><span class="lang-en">Partner With Me</span><span class="lang-ar">تواصل معي</span></a></li>`;

indexHtml = indexHtml.replace(oldNav, newNav);

fs.writeFileSync('index.html', indexHtml);
console.log('index.html updated successfully with missing sections.');

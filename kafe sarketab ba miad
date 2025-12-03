<!DOCTYPE html>
<html dir="rtl" lang="fa">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <title>کافه سرکتاب میعاد</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        /* ---------- Splash Screen ---------- */
        #splash {
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background: linear-gradient(45deg, #1e2a3a, #2c3e50);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            animation: fadeOut 1s ease forwards;
            animation-delay: 3s;
            padding: 20px;
            text-align: center;
        }

        #splash h1 {
            font-size: 2.2em;
            color: #ffcc00;
            margin: 0 0 20px 0;
            animation: fadeIn 1s ease;
            text-shadow: 0 0 15px rgba(255, 204, 0, 0.7);
            font-weight: bold;
            font-family: 'Segoe UI', Tahoma, sans-serif;
            line-height: 1.4;
        }

        #splash .main-text {
            font-size: 1.2em;
            color: #ffffff;
            margin: 10px 0;
            text-align: center;
            line-height: 1.6;
            animation: fadeIn 1.5s ease;
            text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
            font-weight: 500;
            font-family: 'Segoe UI', Tahoma, sans-serif;
        }

        #splash .contact-info {
            font-size: 0.9em;
            color: #e8d8c3;
            margin: 8px 0;
            text-align: center;
            line-height: 1.5;
            animation: fadeIn 2s ease;
            font-family: 'Segoe UI', Tahoma, sans-serif;
        }

        #splash .contact-info i {
            color: #ffcc00;
            margin-left: 5px;
        }

        @keyframes fadeOut {
            to { opacity: 0; visibility: hidden; }
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* ---------- کد مادر ---------- */
        :root {
            --blue1: #5a6fd8;
            --purple: #6b4b9a;
            --blue-dark: #1e2a3a;
            --blue-darker: #2c3e50;
            --gold: #ffcc00;
            --gold-dark: #e6b800;
            --red: #ff3366;
            --red-dark: #e62e5c;
            --green: #27ae60;
            --orange: #e67e22;
            --teal: #00b894;
            --text-dark: #2c3e50;
            --text-light: #5d6d7e;
            --white: #ffffff;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, sans-serif;
        }
        
        body {
            background: linear-gradient(135deg, var(--blue1), var(--purple));
            color: var(--text-dark);
            min-height: 100vh;
            padding: 0;
        }
        
        .container {
            max-width: 100%;
            margin: 0 auto;
            display: none;
        }
        
        /* هدر */
        .header {
            background: linear-gradient(135deg, var(--blue-dark), var(--blue-darker));
            color: var(--white);
            padding: 15px 20px;
            text-align: center;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            position: relative;
        }
        
        .logo {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            margin-bottom: 5px;
        }
        
        .logo-icon {
            font-size: 1.8em;
            color: var(--gold);
            text-shadow: 0 0 10px rgba(255, 204, 0, 0.5);
        }
        
        .header h1 {
            font-size: 1.4em;
            background: linear-gradient(45deg, var(--gold), var(--red));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        
        .header p {
            opacity: 0.9;
            font-size: 0.9em;
            margin-top: 5px;
        }
        
        .bismillah {
            text-align: center;
            color: var(--gold);
            font-size: 1.1em;
            margin: 8px 0;
            font-weight: bold;
            text-shadow: 0 0 5px rgba(255, 204, 0, 0.3);
        }
        
        /* ساعت */
        .clock {
            background: linear-gradient(135deg, var(--blue1), var(--purple));
            color: var(--white);
            padding: 10px;
            text-align: center;
            font-weight: bold;
            font-family: 'Courier New', monospace;
            margin: 8px 15px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            border: 1px solid rgba(255,255,255,0.2);
        }
        
        /* ناوبری اصلی */
        .main-nav {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
            padding: 12px;
            background: rgba(255,255,255,0.05);
            backdrop-filter: blur(15px);
        }
        
        .nav-btn {
            background: linear-gradient(135deg, rgba(90, 111, 216, 0.9), rgba(107, 75, 154, 0.9));
            border: none;
            border-radius: 12px;
            padding: 18px 8px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 6px 20px rgba(90, 111, 216, 0.4);
            color: var(--white);
            font-weight: bold;
            position: relative;
            overflow: hidden;
        }
        
        .nav-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--gold), transparent);
        }
        
        .nav-btn:hover {
            transform: translateY(-3px);
            background: linear-gradient(135deg, var(--red), var(--red-dark));
            box-shadow: 0 8px 25px rgba(255, 51, 102, 0.5);
        }
        
        .nav-btn i {
            font-size: 1.6em;
            margin-bottom: 6px;
            display: block;
            color: var(--gold);
            text-shadow: 0 0 8px rgba(255, 204, 0, 0.5);
        }
        
        .nav-btn span {
            font-size: 0.75em;
        }
        
        /* فوتر */
        .footer {
            background: linear-gradient(135deg, var(--blue-dark), var(--blue-darker));
            color: var(--white);
            text-align: center;
            padding: 15px;
            margin-top: 15px;
            font-size: 0.85em;
        }
        
        /* مدال‌ها */
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.95);
            z-index: 1000;
            justify-content: center;
            align-items: center;
            padding: 10px;
        }
        
        .modal-content {
            background: linear-gradient(135deg, #1e2a3a, #2c3e50);
            border-radius: 20px;
            padding: 0;
            width: 100%;
            max-width: 100%;
            max-height: 95vh;
            overflow-y: auto;
            border: 3px solid #ffcc00;
            box-shadow: 0 15px 40px rgba(0,0,0,0.6);
            animation: modalAppear 0.3s ease;
        }
        
        @keyframes modalAppear {
            from {
                opacity: 0;
                transform: scale(0.8) translateY(-20px);
            }
            to {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }
        
        .modal-header {
            background: linear-gradient(135deg, #1e2a3a, #2c3e50);
            color: #ffcc00;
            padding: 20px;
            border-radius: 17px 17px 0 0;
            text-align: center;
            position: relative;
            border-bottom: 2px solid #ffcc00;
        }
        
        .modal-title {
            font-size: 1.3em;
            font-weight: bold;
            color: #ffcc00;
        }
        
        .modal-body {
            padding: 20px;
            color: #ffffff;
            background: linear-gradient(135deg, #1e2a3a, #2c3e50);
        }
        
        .modal-footer {
            background: linear-gradient(135deg, #1e2a3a, #2c3e50);
            padding: 12px 25px;
            border-radius: 0 0 17px 17px;
            text-align: center;
            border-top: 1px solid #ffcc00;
            color: #ffcc00;
            font-size: 0.85em;
        }
        
        .close-btn {
            position: absolute;
            top: 15px;
            left: 15px;
            background: #ffcc00;
            color: #1e2a3a;
            border: none;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1em;
            font-weight: bold;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            transition: all 0.3s ease;
        }
        
        .close-btn:hover {
            transform: rotate(90deg);
            background: #ffffff;
            color: #1e2a3a;
        }
        
        /* فرم‌ها */
        .form-group {
            margin-bottom: 18px;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 6px;
            font-weight: bold;
            color: #ffcc00;
        }
        
        .form-group input, .form-group select, .form-group textarea {
            width: 100%;
            padding: 12px;
            border: 2px solid #ffcc00;
            border-radius: 8px;
            font-size: 1em;
            transition: all 0.3s ease;
            background: rgba(255,255,255,0.1);
            color: #ffffff;
        }
        
        .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
            outline: none;
            border-color: #ffffff;
            box-shadow: 0 0 0 3px rgba(255, 204, 0, 0.3);
            background: rgba(255,255,255,0.15);
        }
        
        .form-group input::placeholder, .form-group textarea::placeholder {
            color: #b8b8b8;
        }
        
        .btn {
            background: linear-gradient(135deg, #ffcc00, #e6b800);
            color: #1e2a3a;
            border: none;
            padding: 12px 24px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 0.95em;
            font-weight: bold;
            transition: all 0.3s ease;
            margin: 4px;
            box-shadow: 0 4px 12px rgba(255, 204, 0, 0.4);
        }
        
        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 18px rgba(255, 204, 0, 0.6);
            background: linear-gradient(135deg, #ffffff, #ffcc00);
        }
        
        .result-box {
            background: rgba(255, 204, 0, 0.1);
            border: 2px solid #ffcc00;
            border-radius: 10px;
            padding: 18px;
            margin-top: 18px;
            text-align: center;
            color: #ffffff;
        }

        /* استایل‌های جدید برای مکاشفه */
        .mokashafa-section {
            background: rgba(255,255,255,0.05);
            border-radius: 12px;
            padding: 20px;
            margin: 15px 0;
            border: 1px solid rgba(255,255,255,0.1);
        }
        
        .mokashafa-title {
            color: #ffcc00;
            font-size: 1.2em;
            margin-bottom: 15px;
            text-align: center;
            border-bottom: 2px solid #ffcc00;
            padding-bottom: 8px;
        }
        
        .mokashafa-input {
            width: 100%;
            padding: 12px;
            border: 2px solid #ffcc00;
            border-radius: 8px;
            background: rgba(255,255,255,0.1);
            color: #ffffff;
            margin: 8px 0;
            font-size: 1em;
        }
        
        .mokashafa-input::placeholder {
            color: #b8b8b8;
        }
        
        .mokashafa-select {
            width: 100%;
            padding: 12px;
            border: 2px solid #ffcc00;
            border-radius: 8px;
            background: rgba(255,255,255,0.1);
            color: #ffffff;
            margin: 8px 0;
            font-size: 1em;
        }
        
        .mokashafa-result {
            background: rgba(255, 204, 0, 0.1);
            border: 1px solid #ffcc00;
            border-radius: 10px;
            padding: 15px;
            margin: 15px 0;
            display: none;
            color: #ffffff;
        }

        /* استایل ماشین حساب */
        .calculator {
            background: #1a1a1a;
            padding: 18px;
            border-radius: 10px;
            margin-bottom: 15px;
            border: 2px solid var(--gold);
        }
        
        .calc-display {
            color: var(--white);
            font-size: 1.4em;
            text-align: left;
            direction: ltr;
            font-family: 'Courier New', monospace;
            margin-bottom: 12px;
            padding: 10px;
            background: #2d2d2d;
            border-radius: 5px;
            border: 1px solid var(--gold);
            min-height: 60px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            word-break: break-all;
        }
        
        .calc-buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 6px;
        }
        
        .calc-btn {
            background: #444;
            color: var(--white);
            border: none;
            padding: 12px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 1em;
            font-weight: bold;
            transition: all 0.3s ease;
        }
        
        .calc-btn:hover {
            background: #555;
            transform: scale(1.05);
        }
        
        .calc-btn.operator {
            background: var(--orange);
        }
        
        .calc-btn.equals {
            background: var(--green);
            grid-column: span 2;
        }
        
        .calc-btn.clear {
            background: var(--red);
        }

        /* استایل تب‌ها */
        .tabs {
            display: flex;
            background: rgba(255,255,255,0.1);
            border-radius: 10px;
            padding: 5px;
            margin: 15px 0;
            border: 1px solid rgba(255,204,0,0.3);
        }

        .tabs button {
            flex: 1;
            padding: 12px;
            border: none;
            background: transparent;
            color: #ffffff;
            cursor: pointer;
            border-radius: 8px;
            transition: all 0.3s ease;
            font-weight: bold;
        }

        .tabs button.active {
            background: linear-gradient(135deg, #ffcc00, #e6b800);
            color: #1e2a3a;
            box-shadow: 0 4px 12px rgba(255, 204, 0, 0.4);
        }

        .tabs button:hover:not(.active) {
            background: rgba(255,255,255,0.1);
        }

        .tab-content {
            display: none;
            margin: 15px 0;
            border-radius: 10px;
            overflow: hidden;
            border: 2px solid rgba(255,204,0,0.3);
        }

        .tab-content.active {
            display: block;
        }

        .tab-content iframe {
            border-radius: 8px;
            background: rgba(255,255,255,0.05);
        }

        /* استایل‌های عمومی */
        .house-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 8px;
            margin: 18px 0;
        }
        
        .house {
            background: linear-gradient(135deg, #ffcc00, #e6b800);
            color: #1e2a3a;
            padding: 12px;
            border-radius: 8px;
            text-align: center;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            border: 1px solid rgba(255,255,255,0.2);
        }
        
        .house:hover {
            transform: scale(1.05);
            background: linear-gradient(135deg, #ffffff, #ffcc00);
        }
        
        .book-list {
            list-style: none;
            padding: 0;
        }
        
        .book-item {
            background: rgba(255, 204, 0, 0.1);
            padding: 12px;
            margin: 8px 0;
            border-radius: 6px;
            border-right: 4px solid #ffcc00;
            cursor: pointer;
            transition: all 0.3s ease;
            color: #ffffff;
        }
        
        .book-item:hover {
            transform: translateX(-5px);
            background: rgba(255, 204, 0, 0.2);
        }
        
        /* رسپانسیو */
        @media (max-width: 480px) {
            .header {
                padding: 12px 15px;
            }
            
            .header h1 {
                font-size: 1.2em;
            }
            
            .main-nav {
                gap: 6px;
                padding: 10px;
            }
            
            .nav-btn {
                padding: 14px 6px;
                font-size: 0.7em;
            }
            
            .nav-btn i {
                font-size: 1.4em;
            }
            
            .modal-content {
                margin: 5px;
                max-height: 98vh;
            }
            
            .house-grid {
                grid-template-columns: repeat(2, 1fr);
            }

            #splash h1 {
                font-size: 1.8em;
            }
            
            #splash .main-text {
                font-size: 1em;
            }
            
            #splash .contact-info {
                font-size: 0.8em;
            }

            .tabs {
                flex-direction: column;
            }

            .tabs button {
                margin: 2px 0;
            }
        }

        /* استایل‌های خاص برای موبایل */
        @media (max-width: 768px) {
            body {
                padding: 0;
                overflow-x: hidden;
            }
            
            .modal {
                padding: 5px;
            }
            
            .modal-content {
                border-radius: 15px;
            }
            
            .modal-body {
                padding: 15px;
            }
        }
    </style>
</head>
<body>

    <!-- Splash Screen -->
    <div id="splash">
        <h1>بسم الله الرحمن الرحیم</h1>
        <p class="main-text">میعاد جابری‌پور<br>کافه سرکتاب و طالع‌بینی میلی</p>
        
        <div class="contact-info">
            <i class="fas fa-phone"></i> شماره تماس: 09392979200
        </div>
        <div class="contact-info">
            <i class="fas fa-envelope"></i> ایمیل: miadjaberi@gmail.com
        </div>
        <div class="contact-info">
            <i class="fab fa-telegram"></i> تلگرام: milimiad@
        </div>
        <div class="contact-info">
            <i class="fab fa-telegram"></i> کانال تلگرام و پیج اینستا: الملک القدوس
        </div>
        <div class="contact-info">
            <i class="fab fa-instagram"></i> آیدی: @khatmjaberi
        </div>
    </div>

    <!-- کد مادر -->
    <div class="container">
        <!-- هدر -->
        <header class="header">
            <div class="logo">
                <div class="logo-icon">☯</div>
                <h1>کافه سرکتاب میعاد</h1>
            </div>
            <p>طالع‌بینی و علوم غریبه</p>
        </header>

        <!-- بسم الله -->
        <div class="bismillah">بسم الله الرحمن الرحیم</div>

        <!-- ساعت و تاریخ -->
        <div class="clock" id="datetime">در حال بارگذاری...</div>

        <!-- ناوبری اصلی - 15 خانه -->
        <nav class="main-nav">
            <!-- ردیف 1 -->
            <button class="nav-btn" onclick="openModal('moqadameModal')">
                <i class="fas fa-crystal-ball"></i>
                مقدمه
            </button>
            <button class="nav-btn" onclick="openModal('mokashafeModal')">
                <i class="fas fa-ankh"></i>
                مکاشفه
            </button>
            <button class="nav-btn" onclick="openModal('sarketabModal')">
                <i class="fas fa-book"></i>
                سرکتاب‌ها
            </button>

            <!-- ردیف 2 -->
            <button class="nav-btn" onclick="openModal('falModal')">
                <i class="fas fa-yin-yang"></i>
                فال تک نیتی
            </button>
            <button class="nav-btn" onclick="openModal('estekharaModal')">
                <i class="fas fa-star-of-david"></i>
                استخاره ۱۶
            </button>
            <button class="nav-btn" onclick="openModal('dalilModal')">
                <i class="fas fa-mandala"></i>
                دلیل الحیران
            </button>

            <!-- ردیف 3 -->
            <button class="nav-btn" onclick="openModal('ramlModal')">
                <i class="fas fa-third-eye"></i>
                رمل میلی
            </button>
            <button class="nav-btn" onclick="openModal('weeklyModal')">
                <i class="fas fa-lotus"></i>
                فال هفتگی
            </button>
            <button class="nav-btn" onclick="openModal('hesabHafrModal')">
                <i class="fas fa-pentagram"></i>
                حساب حفر
            </button>

            <!-- ردیف 4 -->
            <button class="nav-btn" onclick="openModal('mathModal')">
                <i class="fas fa-calculator"></i>
                ماشین حساب
            </button>
            <button class="nav-btn" onclick="openModal('calendarModal')">
                <i class="fas fa-calendar-alt"></i>
                تقویم
            </button>
            <button class="nav-btn" onclick="openModal('needsModal')">
                <i class="fas fa-tools"></i>
                نیازمندی‌ها
            </button>

            <!-- ردیف 5 -->
            <button class="nav-btn" onclick="openModal('contactModal')">
                <i class="fas fa-envelope"></i>
                ارتباط با ما
            </button>
            <button class="nav-btn" onclick="openModal('settingsModal')">
                <i class="fas fa-cog"></i>
                تنظیمات
            </button>
            <button class="nav-btn" onclick="openModal('toolsModal')">
                <i class="fas fa-magic"></i>
                ابزارهای ویژه
            </button>
        </nav>

        <!-- فوتر -->
        <footer class="footer">
            <p>الملک القدوس - کافه سرکتاب میعاد</p>
        </footer>
    </div>

    <!-- مدال فال تک نیتی - نسخه اصلاح شده -->
    <div id="falModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <button class="close-btn" onclick="closeModal('falModal')">
                    <i class="fas fa-times"></i>
                </button>
                <h2 class="modal-title">فال تک نیتی - قزعة رملی</h2>
            </div>
            <div class="modal-body">
                <!-- تب‌های فال -->
                <div class="tabs">
                    <button id="tab1" class="active" onclick="showTab(1)">سؤالات ۱ تا ۲۴</button>
                    <button id="tab2" onclick="showTab(2)">سؤالات ۲۵ تا ۴۶</button>
                </div>

                <div id="content1" class="tab-content active">
                    <iframe src="fal1.html" width="100%" height="600" style="border:none;"></iframe>
                </div>

                <div id="content2" class="tab-content">
                    <iframe src="fal2.html" width="100%" height="600" style="border:none;"></iframe>
                </div>
            </div>
            <div class="modal-footer">
                فال تک نیتی - کاری از استاد میعاد جابری‌پور
            </div>
        </div>
    </div>

    <!-- بقیه مدال‌ها (بدون تغییر) -->
    <div id="moqadameModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <button class="close-btn" onclick="closeModal('moqadameModal')">
                    <i class="fas fa-times"></i>
                </button>
                <h2 class="modal-title">مقدمه - در آستانه مکاشفه</h2>
            </div>
            <div class="modal-body">
                <!-- محتوای کامل شده مقدمه -->
                <div style="text-align: center; margin-bottom: 20px;">
                    <h3 style="color: #ffcc00; margin-bottom: 15px;">سفر به ملکوت معنا</h3>
                    <p style="color: #ffffff; line-height: 1.8;">
                        به کافه سرکتاب میعاد خوش آمدید. این مکان مقدسی است برای جویندگان حقیقت و علاقه‌مندان به علوم غریبه.
                    </p>
                </div>

                <!-- آیه قرآن -->
                <div class="result-box" style="background: rgba(255, 204, 0, 0.1); border: 2px solid #ffcc00; padding: 15px; margin: 15px 0;">
                    <p style="text-align: center; font-size: 1.1em; color: #ffcc00; font-weight: bold;">
                        "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ"
                    </p>
                    <p style="text-align: left; color: #ffcc00; font-size: 0.9em; margin-top: 8px;">
                        سوره البقرة - آیه ۱۸۶
                    </p>
                </div>

                <!-- بخش اصلی -->
                <div style="margin: 20px 0;">
                    <h4 style="color: #ffcc00; border-right: 3px solid #ffcc00; padding-right: 10px; margin-bottom: 15px;">
                        ای عارف جوینده!
                    </h4>
                    <p style="color: #ffffff; line-height: 1.8; text-align: justify;">
                        هرگاه در پی کشف رازهای نهان و دریافت اشارات غیبی هستی، بدان که این راه، راه دل است نه راه عقل. 
                        مکاشفه و رمل، کلیدی است برای گشودن درهای ملکوت، اما این کلید تنها در دستان پاک و دلی مطهر کارگر خواهد افتاد.
                    </p>
                </div>

                <!-- آداب پیش از مکاشفه -->
                <div style="margin: 25px 0;">
                    <h4 style="color: #ffcc00; border-right: 3px solid #ffcc00; padding-right: 10px; margin-bottom: 15px;">
                        آداب پیش از مکاشفه
                    </h4>
                    
                    <div style="background: rgba(255, 204, 0, 0.1); padding: 12px; margin: 10px 0; border-radius: 8px; border-right: 3px solid #ffcc00;">
                        <strong style="color: #ffcc00;">۱. طهارت ظاهری و باطنی:</strong> 
                        <span style="color: #ffffff;">ابتدا وضو بگیر و دلت را از کینه‌ها و غبار گناهان پاک کن</span>
                    </div>
                    
                    <div style="background: rgba(255, 204, 0, 0.1); padding: 12px; margin: 10px 0; border-radius: 8px; border-right: 3px solid #ffcc00;">
                        <strong style="color: #ffcc00;">۲. نماز استخاره:</strong> 
                        <span style="color: #ffffff;">دو رکعت نماز بخوان و با حضور قلب، از خداوند طلب خیر و هدایت کن</span>
                    </div>
                    
                    <div style="background: rgba(255, 204, 0, 0.1); padding: 12px; margin: 10px 0; border-radius: 8px; border-right: 3px solid #ffcc00;">
                        <strong style="color: #ffcc00;">۳. تلاوت قرآن:</strong> 
                        <span style="color: #ffffff;">آیاتی از کلام الله را با تدبر بخوان تا دل‌ات صفا یابد</span>
                    </div>
                    
                    <div style="background: rgba(255, 204, 0, 0.1); padding: 12px; margin: 10px 0; border-radius: 8px; border-right: 3px solid #ffcc00;">
                        <strong style="color: #ffcc00;">۴. دعای توسل:</strong> 
                        <span style="color: #ffffff;">با توسل به اهل بیت (ع)، درهای رحمت را به روی خود بگشای</span>
                    </div>
                    
                    <div style="background: rgba(255, 204, 0, 0.1); padding: 12px; margin: 10px 0; border-radius: 8px; border-right: 3px solid #ffcc00;">
                        <strong style="color: #ffcc00;">۵. نیّت خالص:</strong> 
                        <span style="color: #ffffff;">تنها برای تقرب به خدا و دریافت هدایت، قدم در این راه بگذار</span>
                    </div>
                </div>

                <!-- آیه دوم -->
                <div class="result-box" style="background: rgba(255, 204, 0, 0.1); border: 2px solid #ffcc00; padding: 15px; margin: 15px 0;">
                    <p style="text-align: center; font-size: 1.1em; color: #ffcc00; font-weight: bold;">
                        "إِنَّمَا يَتَقَبَّلُ اللَّهُ مِنَ الْمُتَّقِينَ"
                    </p>
                    <p style="text-align: left; color: #ffcc00; font-size: 0.9em; margin-top: 8px;">
                        سوره المائده - آیه ۲۷
                    </p>
                </div>

                <!-- نکات مهم -->
                <div style="margin: 20px 0;">
                    <h4 style="color: #ffcc00; border-right: 3px solid #ffcc00; padding-right: 10px; margin-bottom: 15px;">
                        نکات مهم در علوم غریبه
                    </h4>
                    <p style="color: #ffffff; line-height: 1.8; text-align: justify;">
                        به یاد داشته باش که علم رمل و مکاشفه، وسیله‌ای است برای تفکر و تأمل، نه جایگزینی برای عقل و تدبر. 
                        هر نشانه‌ای که می‌بینی، آن را با حکمت الهی و عقل سلیم بسنج.
                    </p>
                    
                    <!-- آیه سوم -->
                    <div class="result-box" style="background: rgba(255, 204, 0, 0.1); border: 2px solid #ffcc00; padding: 15px; margin: 15px 0;">
                        <p style="text-align: center; font-size: 1.1em; color: #ffcc00; font-weight: bold;">
                            "وَعَسَىٰ أَن تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَّكُمْ ۖ وَعَسَىٰ أَن تُحِبُّوا شَيْئًا وَهُوَ شَرٌّ لَّكُمْ ۗ وَاللَّهُ يَعْلَمُ وَأَنتُمْ لَا تَعْلَمُونَ"
                        </p>
                        <p style="text-align: left; color: #ffcc00; font-size: 0.9em; margin-top: 8px;">
                            سوره البقرة - آیه ۲۱۶
                        </p>
                    </div>
                </div>

                <!-- دعا -->
                <div style="background: rgba(255, 204, 0, 0.1); border: 1px solid #ffcc00; padding: 15px; border-radius: 8px; margin: 20px 0;">
                    <p style="text-align: center; font-style: italic; color: #ffcc00; line-height: 1.8;">
                        "اللهم إني أسألك بنور وجهك الكريم، أن تفتح لي أبواب رحمتك، وتلهمني الصواب في أمري، 
                        وترزقني الفهم والحكمة، إنك أنت العليم الحكيم"
                    </p>
                </div>

                <!-- اطلاعات اضافه شده -->
                <div style="margin: 20px 0;">
                    <h4 style="color: #ffcc00; border-right: 3px solid #ffcc00; padding-right: 10px; margin-bottom: 15px;">
                        اسرار علوم غریبه
                    </h4>
                    <p style="color: #ffffff; line-height: 1.8; text-align: justify;">
                        <strong style="color: #ffcc00;">رمل:</strong> 
                        <span style="color: #ffffff;">علمی است که از طریق نقاط و اشکال، اسرار نهان را آشکار می‌سازد. هر نقطه نمادی از اراده الهی و هر شکل نشانه‌ای از تقدیر است.</span>
                    </p>
                    <p style="color: #ffffff; line-height: 1.8; text-align: justify; margin-top: 10px;">
                        <strong style="color: #ffcc00;">حساب جمل:</strong> 
                        <span style="color: #ffffff;">هر حرفی عددی دارد و هر عددی رازی. از ترکیب این اعداد، حقایق پنهان عالم آشکار می‌گردد.</span>
                    </p>
                    <p style="color: #ffffff; line-height: 1.8; text-align: justify; margin-top: 10px;">
                        <strong style="color: #ffcc00;">استخاره:</strong> 
                        <span style="color: #ffffff;">مشورت با خداست. وقتی عقل به تنهایی کافی نیست، از خدای علیم طلب راهنمایی می‌کنی.</span>
                    </p>
                </div>

                <!-- دکمه شروع -->
                <button class="btn" onclick="startSpiritualJourney()" style="width: 100%; margin-top: 20px;">
                    <i class="fas fa-crystal-ball"></i> آغاز سفر روحانی
                </button>
            </div>
            <div class="modal-footer">
                نگارش: استاد میعاد جابری‌پور - کاری از حاجی و استاد میعاد
            </div>
        </div>
    </div>

    <!-- مدال مکاشفه -->
    <div id="mokashafeModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <button class="close-btn" onclick="closeModal('mokashafeModal')">
                    <i class="fas fa-times"></i>
                </button>
                <h2 class="modal-title">مکاشفه و علوم غریبه</h2>
            </div>
            <div class="modal-body">
                
                <!-- بخش 1: طالع اسمی -->
                <div class="mokashafa-section">
                    <h3 class="mokashafa-title">🔮 طالع اسمی</h3>
                    <p style="color: #ffffff; text-align: center; margin-bottom: 15px;">
                        محاسبه بخت و اقبال بر اساس اسم
                    </p>
                    
                    <input type="text" class="mokashafa-input" id="talehName" placeholder="اسم مورد نظر">
                    <input type="text" class="mokashafa-input" id="talehMother" placeholder="اسم مادر">
                    
                    <button class="btn" onclick="calculateTalehEsmi()" style="width: 100%;">
                        <i class="fas fa-calculator"></i> محاسبه طالع اسمی
                    </button>
                    
                    <div class="mokashafa-result" id="talehResult">
                        <!-- نتیجه اینجا نمایش داده می‌شود -->
                    </div>
                </div>

                <!-- بخش 2: کشف مریض -->
                <div class="mokashafa-section">
                    <h3 class="mokashafa-title">🏥 کشف مریض</h3>
                    <p style="color: #ffffff; text-align: center; margin-bottom: 15px;">
                        تشخیص علت بیماری بر اساس اسم و روز
                    </p>
                    
                    <input type="text" class="mokashafa-input" id="patientName" placeholder="اسم بیمار">
                    <input type="text" class="mokashafa-input" id="patientMother" placeholder="اسم مادر بیمار">
                    
                    <select class="mokashafa-select" id="patientDay">
                        <option value="السبت">شنبه - السبت</option>
                        <option value="الاحد">یکشنبه - الاحد</option>
                        <option value="الاثنین">دوشنبه - الاثنین</option>
                        <option value="الثلاثاء">سه‌شنبه - الثلاثاء</option>
                        <option value="الاربعاء">چهارشنبه - الاربعاء</option>
                        <option value="الخمیس">پنجشنبه - الخمیس</option>
                        <option value="الجمعه">جمعه - الجمعه</option>
                    </select>
                    
                    <button class="btn" onclick="calculateKashfAlMariz()" style="width: 100%;">
                        <i class="fas fa-stethoscope"></i> تشخیص علت بیماری
                    </button>
                    
                    <div class="mokashafa-result" id="patientResult">
                        <!-- نتیجه اینجا نمایش داده می‌شود -->
                    </div>
                </div>

                <!-- بخش 3: حساب النجم -->
                <div class="mokashafa-section">
                    <h3 class="mokashafa-title">⭐ حساب النجم</h3>
                    <p style="color: #ffffff; text-align: center; margin-bottom: 15px;">
                        محاسبه ستاره، طالع و طبیعت فرد
                    </p>
                    
                    <input type="text" class="mokashafa-input" id="starName" placeholder="اسم شخص">
                    <input type="text" class="mokashafa-input" id="starMother" placeholder="اسم مادر">
                    
                    <button class="btn" onclick="calculateHisabAlNajm()" style="width: 100%;">
                        <i class="fas fa-star"></i> محاسبه ستاره و طالع
                    </button>
                    
                    <div class="mokashafa-result" id="starResult">
                        <!-- نتیجه اینجا نمایش داده می‌شود -->
                    </div>
                </div>

            </div>
            <div class="modal-footer">
                کاری از حاجی و استاد میعاد
            </div>
        </div>
    </div>

    <!-- سایر مدال‌ها... -->
    <div id="sarketabModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <button class="close-btn" onclick="closeModal('sarketabModal')">
                    <i class="fas fa-times"></i>
                </button>
                <h2 class="modal-title">سرکتاب‌ها</h2>
            </div>
            <div class="modal-body">
                <ul class="book-list">
                    <li class="book-item" onclick="openBook('کتاب رمل الکبیر')">📖 کتاب رمل الکبیر</li>
                    <li class="book-item" onclick="openBook('دلیل الحیران')">📖 دلیل الحیران</li>
                    <li class="book-item" onclick="openBook('سرکتاب میعاد')">📖 سرکتاب میعاد</li>
                    <li class="book-item" onclick="openBook('اسرار الرمل')">📖 اسرار الرمل</li>
                    <li class="book-item" onclick="openBook('مکاشفات روحانی')">📖 مکاشفات روحانی</li>
                </ul>
            </div>
            <div class="modal-footer">
                کاری از حاجی و استاد میعاد
            </div>
        </div>
    </div>

    <div id="estekharaModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <button class="close-btn" onclick="closeModal('estekharaModal')">
                    <i class="fas fa-times"></i>
                </button>
                <h2 class="modal-title">استخاره ۱۶</h2>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label>سوال استخاره:</label>
                    <textarea id="estekharaQuestion" rows="3" placeholder="سوال خود را برای استخاره بنویسید..."></textarea>
                </div>
                
                <button class="btn" onclick="doEstekhara()">
                    <i class="fas fa-quran"></i> استخاره بگیر
                </button>
                
                <div class="house-grid" id="estekharaHouses">
                    <!-- خانه‌های استخاره -->
                </div>
                
                <div id="estekharaResult" class="result-box" style="display: none;">
                    <h3>نتیجه استخاره</h3>
                    <p id="estekharaText"></p>
                </div>
            </div>
            <div class="modal-footer">
                کاری از حاجی و استاد میعاد
            </div>
        </div>
    </div>

    <!-- سایر مدال‌ها... -->
    <div id="dalilModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <button class="close-btn" onclick="closeModal('dalilModal')">
                    <i class="fas fa-times"></i>
                </button>
                <h2 class="modal-title">دلیل الحیران</h2>
            </div>
            <div class="modal-body">
                <p style="color: #ffffff; text-align: center;">این بخش به زودی اضافه خواهد شد...</p>
            </div>
            <div class="modal-footer">
                کاری از حاجی و استاد میعاد
            </div>
        </div>
    </div>

    <div id="ramlModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <button class="close-btn" onclick="closeModal('ramlModal')">
                    <i class="fas fa-times"></i>
                </button>
                <h2 class="modal-title">رمل میلی</h2>
            </div>
            <div class="modal-body">
                <p style="color: #ffffff; text-align: center;">این بخش به زودی اضافه خواهد شد...</p>
            </div>
            <div class="modal-footer">
                کاری از حاجی و استاد میعاد
            </div>
        </div>
    </div>

    <div id="weeklyModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <button class="close-btn" onclick="closeModal('weeklyModal')">
                    <i class="fas fa-times"></i>
                </button>
                <h2 class="modal-title">فال هفتگی</h2>
            </div>
            <div class="modal-body">
                <p style="color: #ffffff; text-align: center;">این بخش به زودی اضافه خواهد شد...</p>
            </div>
            <div class="modal-footer">
                کاری از حاجی و استاد میعاد
            </div>
        </div>
    </div>

    <div id="mathModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <button class="close-btn" onclick="closeModal('mathModal')">
                    <i class="fas fa-times"></i>
                </button>
                <h2 class="modal-title">ماشین حساب پیشرفته</h2>
            </div>
            <div class="modal-body">
                <div class="calculator">
                    <div class="calc-display" id="calcDisplay">0</div>
                    <div class="calc-buttons">
                        <button class="calc-btn clear" onclick="clearCalculator()">C</button>
                        <button class="calc-btn" onclick="deleteLast()">⌫</button>
                        <button class="calc-btn operator" onclick="appendToDisplay('/')">/</button>
                        <button class="calc-btn operator" onclick="appendToDisplay('*')">×</button>
                        
                        <button class="calc-btn" onclick="appendToDisplay('7')">7</button>
                        <button class="calc-btn" onclick="appendToDisplay('8')">8</button>
                        <button class="calc-btn" onclick="appendToDisplay('9')">9</button>
                        <button class="calc-btn operator" onclick="appendToDisplay('-')">-</button>
                        
                        <button class="calc-btn" onclick="appendToDisplay('4')">4</button>
                        <button class="calc-btn" onclick="appendToDisplay('5')">5</button>
                        <button class="calc-btn" onclick="appendToDisplay('6')">6</button>
                        <button class="calc-btn operator" onclick="appendToDisplay('+')">+</button>
                        
                        <button class="calc-btn" onclick="appendToDisplay('1')">1</button>
                        <button class="calc-btn" onclick="appendToDisplay('2')">2</button>
                        <button class="calc-btn" onclick="appendToDisplay('3')">3</button>
                        <button class="calc-btn equals" onclick="calculateResult()" rowspan="2">=</button>
                        
                        <button class="calc-btn" onclick="appendToDisplay('0')" colspan="2">0</button>
                        <button class="calc-btn" onclick="appendToDisplay('.')">.</button>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                ماشین حساب پیشرفته - کاری از استاد میعاد
            </div>
        </div>
    </div>

    <div id="hesabHafrModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <button class="close-btn" onclick="closeModal('hesabHafrModal')">
                    <i class="fas fa-times"></i>
                </button>
                <h2 class="modal-title">حساب جفر و ابجد</h2>
            </div>
            <div class="modal-body">
                <p style="color: #ffffff; text-align: center;">این بخش به زودی اضافه خواهد شد...</p>
            </div>
            <div class="modal-footer">
                کاری از حاجی و استاد میعاد
            </div>
        </div>
    </div>

    <div id="calendarModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <button class="close-btn" onclick="closeModal('calendarModal')">
                    <i class="fas fa-times"></i>
                </button>
                <h2 class="modal-title">تقویم</h2>
            </div>
            <div class="modal-body">
                <p style="color: #ffffff; text-align: center;">این بخش به زونی اضافه خواهد شد...</p>
            </div>
            <div class="modal-footer">
                کاری از حاجی و استاد میعاد
            </div>
        </div>
    </div>

    <div id="needsModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <button class="close-btn" onclick="closeModal('needsModal')">
                    <i class="fas fa-times"></i>
                </button>
                <h2 class="modal-title">نیازمندی‌ها</h2>
            </div>
            <div class="modal-body">
                <p style="color: #ffffff; text-align: center;">این بخش به زودی اضافه خواهد شد...</p>
            </div>
            <div class="modal-footer">
                کاری از حاجی و استاد میعاد
            </div>
        </div>
    </div>

    <div id="contactModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <button class="close-btn" onclick="closeModal('contactModal')">
                    <i class="fas fa-times"></i>
                </button>
                <h2 class="modal-title">ارتباط با ما</h2>
            </div>
            <div class="modal-body">
                <p style="color: #ffffff; text-align: center;">این بخش به زودی اضافه خواهد شد...</p>
            </div>
            <div class="modal-footer">
                کاری از حاجی و استاد میعاد
            </div>
        </div>
    </div>

    <div id="settingsModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <button class="close-btn" onclick="closeModal('settingsModal')">
                    <i class="fas fa-times"></i>
                </button>
                <h2 class="modal-title">تنظیمات</h2>
            </div>
            <div class="modal-body">
                <p style="color: #ffffff; text-align: center;">این بخش به زودی اضافه خواهد شد...</p>
            </div>
            <div class="modal-footer">
                کاری از حاجی و استاد میعاد
            </div>
        </div>
    </div>

    <div id="toolsModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <button class="close-btn" onclick="closeModal('toolsModal')">
                    <i class="fas fa-times"></i>
                </button>
                <h2 class="modal-title">ابزارهای ویژه</h2>
            </div>
            <div class="modal-body">
                <p style="color: #ffffff; text-align: center;">این بخش به زودی اضافه خواهد شد...</p>
            </div>
            <div class="modal-footer">
                کاری از حاجی و استاد میعاد
            </div>
        </div>
    </div>

    <script>
        // ==================== مدیریت تب‌ها ====================
        function showTab(num) {
            // حذف کلاس active از همه تب‌ها و محتواها
            document.getElementById("tab1").classList.remove("active");
            document.getElementById("tab2").classList.remove("active");
            document.getElementById("content1").classList.remove("active");
            document.getElementById("content2").classList.remove("active");

            // اضافه کردن کلاس active به تب و محتوای انتخاب شده
            if(num === 1){
                document.getElementById("tab1").classList.add("active");
                document.getElementById("content1").classList.add("active");
            } else {
                document.getElementById("tab2").classList.add("active");
                document.getElementById("content2").classList.add("active");
            }
        }

        // ==================== نمایش صفحه اصلی بعد از اسپلش ====================
        window.addEventListener('load', () => {
            setTimeout(() => {
                const splash = document.getElementById('splash');
                const container = document.querySelector('.container');
                
                if (splash && container) {
                    splash.style.display = 'none';
                    container.style.display = 'block';
                }
            }, 3000);
        });

        // ==================== مدیریت مدال‌ها ====================
        function openModal(modalId) {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        }

        function closeModal(modalId) {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }

        // بستن مدال با کلیک خارج
        document.addEventListener('click', function(event) {
            if (event.target.classList.contains('modal')) {
                event.target.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });

        // بستن با کلید ESC
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                const modals = document.querySelectorAll('.modal');
                modals.forEach(modal => {
                    modal.style.display = 'none';
                });
                document.body.style.overflow = 'auto';
            }
        });

        // ==================== به روزرسانی ساعت ====================
        function updateClock() {
            const now = new Date();
            const datetimeElement = document.getElementById('datetime');
            
            if (datetimeElement) {
                const options = { 
                    year: 'numeric', 
                    month: '2-digit', 
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit', 
                    second: '2-digit'
                };
                datetimeElement.textContent = now.toLocaleString('fa-IR', options);
            }
        }

        // ==================== محاسبات ابجد ====================
        function calculateAbjad(text) {
            if (!text) return 0;
            
            const abjad = {
                'ا':1, 'آ':1, 'أ':1, 'إ':1, 'ب':2, 'پ':2, 'ت':400, 'ث':500,
                'ج':3, 'چ':3, 'ح':8, 'خ':600, 'د':4, 'ذ':700, 'ر':200, 'ز':7,
                'ژ':7, 'س':60, 'ش':300, 'ص':90, 'ض':800, 'ط':9, 'ظ':900,
                'ع':70, 'غ':1000, 'ف':80, 'ق':100, 'ک':20, 'گ':20, 'ل':30,
                'م':40, 'ن':50, 'و':6, 'ه':5, 'ی':10, 'ئ':10, 'ة':5
            };
            
            let sum = 0;
            for (let char of text) {
                if (abjad[char]) {
                    sum += abjad[char];
                }
            }
            return sum;
        }

        // ==================== تابع شروع سفر روحانی ====================
        function startSpiritualJourney() {
            if(confirm('آیا از آمادگی روحی و معنوی لازم برای آغاز سفر مکاشفه برخوردار هستید؟')) {
                localStorage.setItem('spiritual_journey_started', 'true');
                localStorage.setItem('journey_start_time', new Date().toISOString());
                alert('سفر روحانی شما آغاز شد! به بخش اصلی مکاشفه خوش آمدید.');
                closeModal('moqadameModal');
            } else {
                alert('لطفاً ابتدا با انجام آداب و اعمال معنوی، خود را آماده کنید.');
            }
        }

        // ==================== طالع اسمی ====================
        function calculateTalehEsmi() {
            const name = document.getElementById('talehName')?.value.trim();
            const mother = document.getElementById('talehMother')?.value.trim();

            if (!name || !mother) {
                alert("لطفاً هر دو فیلد را پر کنید");
                return;
            }

            const nameSum = calculateAbjad(name);
            const motherSum = calculateAbjad(mother);
            const total = nameSum + motherSum;
            const remainder = total % 4;

            let resultType, description;
            if (remainder === 0) {
                resultType = "طالع اشرافی 👑";
                description = "این فرد می‌تواند در طبقه‌ای از اجتماع قرار گیرد که مرفه و ثروتمندند. زندگی با شکوه و تجملاتی در انتظارشان است.";
            } else if (remainder === 1) {
                resultType = "طالع حادثه ساز ⚡";
                description = "این افراد تیرانداز هستند. آنها انسان‌های بدی نیستند ولی موج آنها همیشه با حوادث و اتفاقات غیرمنتظره همراه است.";
            } else if (remainder === 2) {
                resultType = "طالع کم درآمد 💼";
                description = "این طبقه‌ای است که افراد در آن به سختی و با زحمت زیاد امرار معاش می‌کنند. نیاز به تلاش فراوان دارند.";
            } else {
                resultType = "طالع عرفانی ✨";
                description = "این افراد در طبقه‌ای از اجتماع قرار دارند که بیشتر معنویت در اطراف آن دور می‌زند. زندگی معنوی غنی‌ای خواهند داشت.";
            }

            const resultElement = document.getElementById('talehResult');
            if (resultElement) {
                resultElement.innerHTML = `
                    <h4 style="color: #ffcc00; text-align: center; margin-bottom: 15px;">${resultType}</h4>
                    <p style="color: #ffffff; line-height: 1.6; text-align: justify;">${description}</p>
                    <div style="margin-top: 15px; padding: 10px; background: rgba(255,255,255,0.1); border-radius: 8px;">
                        <p style="color: #ffcc00; font-size: 0.9em; margin: 0;">
                            🔢 محاسبات: اسم (${nameSum}) + مادر (${motherSum}) = ${total} → باقیمانده ${remainder}
                        </p>
                    </div>
                `;
                resultElement.style.display = 'block';
            }
        }

        // ==================== کشف مریض ====================
        function calculateKashfAlMariz() {
            const name = document.getElementById('patientName')?.value.trim();
            const mother = document.getElementById('patientMother')?.value.trim();
            const day = document.getElementById('patientDay')?.value;

            if (!name || !mother || !day) {
                alert("لطفاً همه فیلدها را پر کنید");
                return;
            }

            const personAbjad = calculateAbjad(name);
            const motherAbjad = calculateAbjad(mother);
            
            const dayAbjad = {
                'السبت': 493, 'الاحد': 44, 'الاثنین': 642,
                'الثلاثاء': 1063, 'الاربعاء': 305, 
                'الخمیس': 741, 'الجمعه': 149
            }[day] || 0;
            
            let total = personAbjad + motherAbjad + dayAbjad;
            total = total - 7 - 7; // اسقاط (۷-۷)
            total = total * 10; // اضافه الأسی عشره (ضرب در ۱۰)
            
            const remainder = total % 7;
            const resultNumber = remainder === 0 ? 7 : remainder;

            const results = {
                1: { type: "بیماری از جن 👻", description: "علائم بیماری ممکن است نوسانی و غیرقابل پیش‌بینی باشد. نیاز به رعایت مسائل معنوی دارد." },
                2: { type: "بیماری از هوا 🌬️", description: "ممکن است مربوط به آلرژی، تغییرات آب و هوایی یا عوامل محیطی باشد." },
                3: { type: "بیماری از سحر 🔮", description: "علائم غیرعادی و مقاوم به درمان. مشورت با متخصص و رعایت مسائل شرعی توصیه می‌شود." },
                4: { type: "بیماری از چشم 👁️", description: "ممکن است ناشی از چشم‌زخم یا تأثیرات منفی نگاه دیگران باشد." },
                5: { type: "بیماری از خون 🩸", description: "مشکلات مربوط به گردش خون، فشار خون یا اختلالات خونی محتمل است." },
                6: { type: "بیماری از سودا 🧠", description: "ممکن است مربوط به افسردگی، استرس یا مشکلات عصبی باشد." },
                7: { type: "بیماری از صفرا 🔥", description: "مشکلات گوارشی، کبدی یا مربوط به گرمی بدن محتمل است." }
            };

            const result = results[resultNumber] || { type: "نامشخص", description: "نتیجه در دسترس نیست" };

            const resultElement = document.getElementById('patientResult');
            if (resultElement) {
                resultElement.innerHTML = `
                    <h4 style="color: #ff6b6b; text-align: center; margin-bottom: 15px;">${result.type}</h4>
                    <p style="color: #ffffff; line-height: 1.6; text-align: justify;">${result.description}</p>
                    <div style="margin-top: 15px; padding: 10px; background: rgba(255,255,255,0.1); border-radius: 8px;">
                        <p style="color: #ffcc00; font-size: 0.9em; margin: 0;">
                            🔢 تشخیص: مرتبه ${resultNumber} از ۷ | روز: ${day}
                        </p>
                    </div>
                `;
                resultElement.style.display = 'block';
            }
        }

        // ==================== حساب النجم ====================
        function calculateHisabAlNajm() {
            const name = document.getElementById('starName')?.value.trim();
            const mother = document.getElementById('starMother')?.value.trim();

            if (!name || !mother) {
                alert("لطفاً هر دو فیلد را پر کنید");
                return;
            }

            const personAbjad = calculateAbjad(name);
            const motherAbjad = calculateAbjad(mother);
            
            let total = personAbjad + motherAbjad;
            total = total - 12; // تسقط اثنین عشر (کم کردن ۱۲)
            
            const remainder = total % 12;
            const resultNumber = remainder === 0 ? 12 : remainder;

            const results = {
                1: { star: "برج جَدی 🐐", taleh: "طالع مریخ ♂️", nature: "طبیعت آتشی 🔥", description: "افراد با اراده و بلندپرواز" },
                2: { star: "ثور (گاو) 🐂", taleh: "زهره ♀️", nature: "طبیعت خاکی 🌍", description: "صبور و با ثبات" },
                3: { star: "جوزا 👫", taleh: "عطارد ☿", nature: "طبیعت هوایی 💨", description: "کنجکاو و ارتباطی" },
                4: { star: "سرطان 🦀", taleh: "ماه 🌙", nature: "طبیعت آبی 💧", description: "حساس و عاطفی" },
                5: { star: "اسد (شیر) 🦁", taleh: "خورشید ☀️", nature: "طبیعت آتشی 🔥", description: "قدرتمند و جسور" },
                6: { star: "سنبله (خوشه) 🌾", taleh: "عطارد ☿", nature: "طبیعت خاکی 🌍", description: "منظم و دقیق" },
                7: { star: "میزان ⚖️", taleh: "زهره ♀️", nature: "طبیعت هوایی 💨", description: "منصف و متعادل" },
                8: { star: "عقرب 🦂", taleh: "مریخ ♂️", nature: "طبیعت آبی 💧", description: "شهودی و عمیق" },
                9: { star: "قوس (کمان) 🏹", taleh: "مشتری ♃", nature: "طبیعت آتشی 🔥", description: "خوشبین و ماجراجو" },
                10: { star: "جدی (بز) 🐐", taleh: "زحل ♄", nature: "طبیعت خاکی 🌍", description: "مسئولیت‌پذیر و منظم" },
                11: { star: "دلو (آبریز) 💧", taleh: "عطارد ☿", nature: "طبیعت هوایی 💨", description: "مستقل و نوآور" },
                12: { star: "حوت (ماهی) 🐠", taleh: "مشتری ♃", nature: "طبیعت آبی 💧", description: "دلسوز و هنرمند" }
            };

            const result = results[resultNumber] || { star: "نامشخص", taleh: "نامشخص", nature: "نامشخص", description: "نتیجه در دسترس نیست" };

            const resultElement = document.getElementById('starResult');
            if (resultElement) {
                resultElement.innerHTML = `
                    <div style="text-align: center; margin-bottom: 15px;">
                        <h4 style="color: #ffcc00; margin-bottom: 10px;">${result.star}</h4>
                        <p style="color: #ffffff; margin: 5px 0;">${result.taleh}</p>
                        <p style="color: #ffffff; margin: 5px 0;">${result.nature}</p>
                    </div>
                    <p style="color: #ffcc00; line-height: 1.6; text-align: center; font-style: italic;">
                        ${result.description}
                    </p>
                    <div style="margin-top: 15px; padding: 10px; background: rgba(255,255,255,0.1); border-radius: 8px;">
                        <p style="color: #ffcc00; font-size: 0.9em; margin: 0; text-align: center;">
                            🔢 محاسبات: مجموع ${personAbjad + motherAbjad} - 12 = ${total} → برج ${resultNumber}
                        </p>
                    </div>
                `;
                resultElement.style.display = 'block';
            }
        }

        // ==================== فال تک نیتی ====================
        function generateFalk() {
            const name = document.getElementById('userName')?.value || 'کاربر';
            
            const falOptions = [
                `امروز روز خوبی برای ${name} خواهد بود. انرژی مثبت در اطراف شما جریان دارد.`,
                `هنگام تصمیم‌گیری امروز، به ندای قلبتان گوش دهید ${name}.`,
                `امروز روز مناسبی برای شروع پروژه‌های جدید است ${name}. شانس با شما یار است.`,
                `مراقب فرصت‌های غیرمنتظره امروز باشید ${name}. ممکن است اتفاق خوبی در راه باشد.`,
                `امروز بهتر است در تصمیم‌گیری‌ها عجله نکنید ${name}. صبر کنید تا شرایط روشن‌تر شود.`
            ];
            
            const randomFalk = falOptions[Math.floor(Math.random() * falOptions.length)];
            const falText = document.getElementById('falText');
            const falResult = document.getElementById('falResult');
            
            if (falText && falResult) {
                falText.textContent = randomFalk;
                falResult.style.display = 'block';
            }
        }

        // ==================== استخاره ۱۶ ====================
        function doEstekhara() {
            const houses = document.getElementById('estekharaHouses');
            
            if (houses) {
                houses.innerHTML = '';
                for (let i = 1; i <= 16; i++) {
                    const house = document.createElement('div');
                    house.className = 'house';
                    house.textContent = i;
                    house.onclick = () => selectHouse(i);
                    houses.appendChild(house);
                }
            }
            
            const results = [
                "خیلی خوب - اقدام کنید",
                "خوب - مناسب است", 
                "متوسط - با احتیاط",
                "بد - صبر کنید",
                "خیلی بد - فعلاً انجام ندهید"
            ];
            
            const randomResult = results[Math.floor(Math.random() * results.length)];
            const estekharaText = document.getElementById('estekharaText');
            const estekharaResult = document.getElementById('estekharaResult');
            
            if (estekharaText && estekharaResult) {
                estekharaText.textContent = `نتیجه استخاره: ${randomResult}`;
                estekharaResult.style.display = 'block';
            }
        }

        function selectHouse(houseNumber) {
            alert(`خانه ${houseNumber} انتخاب شد`);
        }

        // ==================== سرکتاب‌ها ====================
        function openBook(bookName) {
            alert(`کتاب "${bookName}" در حال بارگذاری...`);
        }

        // ==================== ماشین حساب ====================
        let currentInput = '0';
        let shouldResetDisplay = false;

        function updateDisplay() {
            const calcDisplay = document.getElementById('calcDisplay');
            if (calcDisplay) {
                calcDisplay.textContent = currentInput;
            }
        }

        function appendToDisplay(value) {
            if (shouldResetDisplay) {
                currentInput = '';
                shouldResetDisplay = false;
            }
            
            if (currentInput === '0' && value !== '.') {
                currentInput = value;
            } else {
                currentInput += value;
            }
            updateDisplay();
        }

        function clearCalculator() {
            currentInput = '0';
            updateDisplay();
        }

        function deleteLast() {
            if (currentInput.length > 1) {
                currentInput = currentInput.slice(0, -1);
            } else {
                currentInput = '0';
            }
            updateDisplay();
        }

        function calculateResult() {
            try {
                // جایگزینی عملگرهای نمایشی با عملگرهای ریاضی
                let expression = currentInput.replace(/×/g, '*').replace(/÷/g, '/');
                let result = eval(expression);
                
                if (isNaN(result) || !isFinite(result)) {
                    throw new Error('Invalid calculation');
                }
                
                currentInput = result.toString();
                shouldResetDisplay = true;
                updateDisplay();
            } catch (error) {
                currentInput = 'Error';
                shouldResetDisplay = true;
                updateDisplay();
            }
        }

        // ==================== راه‌اندازی اولیه ====================
        document.addEventListener('DOMContentLoaded', function() {
            updateClock();
            setInterval(updateClock, 1000);
        });
    </script>
</body>
</html>

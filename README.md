<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OnTime Marketing Inc. | Temporal Intent Synchronization Engine</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <style>
        :root {
            --primary: #0066cc;
            --secondary: #004499;
            --accent: #00d4ff;
            --dark: #0a0e17;
            --darker: #050810;
            --glass: rgba(255, 255, 255, 0.03);
        }
        
        * {
            font-family: 'Inter', sans-serif;
        }
        
        h1, h2, h3, .font-display {
            font-family: 'Space Grotesk', sans-serif;
        }
        
        body {
            background: var(--darker);
            color: white;
            overflow-x: hidden;
        }
        
        /* Animated Gradient Background */
        .gradient-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -2;
            background: 
                radial-gradient(ellipse at 20% 20%, rgba(0, 102, 204, 0.15) 0%, transparent 50%),
                radial-gradient(ellipse at 80% 80%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
                radial-gradient(ellipse at 50% 50%, rgba(0, 68, 153, 0.1) 0%, transparent 70%),
                var(--darker);
            animation: gradientShift 20s ease-in-out infinite;
        }
        
        @keyframes gradientShift {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 1; }
            33% { transform: translate(30px, -30px) scale(1.1); opacity: 0.8; }
            66% { transform: translate(-20px, 20px) scale(0.9); opacity: 0.9; }
        }
        
        /* Grid Overlay */
        .grid-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background-image: 
                linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
            background-size: 60px 60px;
            mask-image: radial-gradient(circle at center, black 30%, transparent 80%);
        }
        
        /* Glassmorphism Cards */
        .glass-card {
            background: var(--glass);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.4);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .glass-card:hover {
            border-color: rgba(0, 212, 255, 0.3);
            box-shadow: 0 20px 60px 0 rgba(0, 102, 204, 0.2);
            transform: translateY(-5px);
        }
        
        /* Diamond Logo Styles */
        .diamond-logo {
            width: 50px;
            height: 50px;
            position: relative;
            filter: drop-shadow(0 0 15px rgba(0, 102, 204, 0.6));
            animation: diamondFloat 4s ease-in-out infinite;
        }
        
        @keyframes diamondFloat {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-5px) rotate(5deg); }
        }
        
        .diamond-glow {
            position: absolute;
            inset: -10px;
            background: radial-gradient(circle, rgba(0, 102, 204, 0.6) 0%, transparent 70%);
            filter: blur(20px);
            animation: glowPulse 2s ease-in-out infinite;
            z-index: -1;
        }
        
        @keyframes glowPulse {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
        }
        
        /* Hero Diamond */
        .hero-diamond-container {
            position: absolute;
            top: 100px;
            right: 60px;
            width: 200px;
            height: 200px;
            z-index: 10;
            animation: heroDiamondFloat 6s ease-in-out infinite;
            filter: drop-shadow(0 0 40px rgba(0, 102, 204, 0.4));
        }
        
        @keyframes heroDiamondFloat {
            0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
            50% { transform: translateY(-30px) rotate(10deg) scale(1.05); }
        }
        
        .hero-diamond-glow {
            position: absolute;
            inset: -30px;
            background: radial-gradient(circle, rgba(0, 102, 204, 0.5) 0%, rgba(0, 212, 255, 0.2) 40%, transparent 70%);
            filter: blur(40px);
            animation: heroGlowPulse 3s ease-in-out infinite;
        }
        
        @keyframes heroGlowPulse {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 0.9; transform: scale(1.3); }
        }
        
        /* Glowing Text */
        .glow-text {
            text-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
        }
        
        /* Button Styles */
        .btn-primary {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
        }
        
        .btn-primary::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.6s;
        }
        
        .btn-primary:hover::before {
            left: 100%;
        }
        
        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 40px rgba(0, 102, 204, 0.4);
        }
        
        /* Navigation */
        .nav-scrolled {
            background: rgba(5, 8, 16, 0.95);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        /* Scroll Reveal Animation Classes */
        .reveal {
            opacity: 0;
            transform: translateY(50px);
        }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 10px;
        }
        
        ::-webkit-scrollbar-track {
            background: var(--darker);
        }
        
        ::-webkit-scrollbar-thumb {
            background: linear-gradient(var(--primary), var(--accent));
            border-radius: 5px;
        }
        
        /* Feature Card Hover Effects */
        .feature-card {
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
        }
        
        .feature-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
            transition: left 0.7s;
        }
        
        .feature-card:hover::before {
            left: 100%;
        }
        
        .feature-card:hover {
            transform: translateY(-10px) scale(1.02);
        }
        
        /* Tech Stack Cards */
        .tech-card {
            background: linear-gradient(135deg, rgba(0, 102, 204, 0.1), rgba(0, 212, 255, 0.05));
            border: 1px solid rgba(0, 212, 255, 0.2);
        }
        
        /* Particle Canvas */
        #particles {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            pointer-events: none;
        }
        
        /* Desktop Optimizations */
        .desktop-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 60px;
        }
        
        .hero-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            align-items: center;
            min-height: 90vh;
            position: relative;
        }
        
        .section-padding {
            padding: 120px 0;
        }
        
        /* Large Typography for Desktop */
        .hero-title {
            font-size: clamp(3rem, 5vw, 5.5rem);
            line-height: 1.05;
            letter-spacing: -0.02em;
        }
        
        .section-title {
            font-size: clamp(2.5rem, 4vw, 4rem);
            letter-spacing: -0.02em;
        }
        
        /* Connection Lines */
        .connection-line {
            position: absolute;
            background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.3), transparent);
            height: 1px;
            width: 100%;
        }
        
        /* Stats Counter */
        .stat-number {
            font-size: 3.5rem;
            font-weight: 800;
            background: linear-gradient(135deg, white, var(--accent));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            line-height: 1;
        }
        
        /* Gradient Border Animation */
        .gradient-border-animated {
            position: relative;
            background: rgba(255, 255, 255, 0.05);
        }
        
        .gradient-border-animated::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: inherit;
            padding: 2px;
            background: linear-gradient(90deg, var(--primary), var(--accent), var(--primary));
            background-size: 200% 100%;
            animation: borderMove 3s linear infinite;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
        }
        
        @keyframes borderMove {
            0% { background-position: 0% 50%; }
            100% { background-position: 200% 50%; }
        }
        
        /* Mobile Menu (Hidden on Desktop) */
        .mobile-menu {
            display: none;
        }
        
        /* Responsive adjustments */
        @media (max-width: 1024px) {
            .desktop-container {
                padding: 0 24px;
            }
            
            .hero-grid {
                grid-template-columns: 1fr;
                gap: 40px;
                text-align: center;
            }
            
            .hero-diamond-container {
                display: none;
            }
            
            .mobile-menu {
                display: block;
            }
        }
    </style>
</head>
<body class="antialiased">

    <!-- Background Elements -->
    <div class="gradient-bg"></div>
    <div class="grid-overlay"></div>
    <canvas id="particles"></canvas>

    <!-- Navigation -->
    <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12 py-4">
        <div class="desktop-container flex items-center justify-between">
            <a href="#" class="flex items-center gap-4 group">
                <!-- Diamond Logo in Nav -->
                <div class="diamond-logo">
                    <div class="diamond-glow"></div>
                    <img src="logo.jpg" alt="OnTime Logo" class="w-full h-full object-contain rounded-lg">
                </div>
                <div class="flex flex-col">
                    <span class="font-display font-bold text-2xl tracking-tight leading-none text-white group-hover:text-cyan-400 transition-colors">ON-TIME</span>
                    <span class="text-xs text-gray-400 tracking-widest uppercase">Marketing Inc.</span>
                </div>
            </a>
            
            <div class="hidden lg:flex items-center gap-10">
                <a href="#technology" class="text-sm text-gray-300 hover:text-cyan-400 transition-colors relative group">
                    Technology
                    <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
                </a>
                <a href="#products" class="text-sm text-gray-300 hover:text-cyan-400 transition-colors relative group">
                    Products
                    <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
                </a>
                <a href="#tokenomics" class="text-sm text-gray-300 hover:text-cyan-400 transition-colors relative group">
                    Tokenomics
                    <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
                </a>
                <a href="#contact" class="btn-primary px-8 py-3 rounded-full text-sm font-semibold text-white shadow-lg shadow-blue-600/30">
                    Get Started
                </a>
            </div>
            
            <button id="mobile-menu-btn" class="lg:hidden p-2 text-white">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
    </nav>

    <!-- Mobile Menu Overlay -->
    <div id="mobile-menu" class="mobile-menu fixed inset-0 z-40 bg-black/95 backdrop-blur-xl hidden flex-col items-center justify-center gap-8">
        <button id="close-menu" class="absolute top-6 right-6 p-2 text-white">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </button>
        <a href="#technology" class="text-2xl font-display font-bold text-white hover:text-cyan-400 transition-colors mobile-link">Technology</a>
        <a href="#products" class="text-2xl font-display font-bold text-white hover:text-cyan-400 transition-colors mobile-link">Products</a>
        <a href="#tokenomics" class="text-2xl font-display font-bold text-white hover:text-cyan-400 transition-colors mobile-link">Tokenomics</a>
        <a href="#contact" class="btn-primary px-8 py-3 rounded-full text-lg font-semibold text-white mobile-link">Get Started</a>
    </div>

    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <!-- Floating Diamond in Top Right -->
        <div class="hero-diamond-container hidden lg:block">
            <div class="hero-diamond-glow"></div>
            <img src="logo.jpg" alt="OnTime Diamond" class="w-full h-full object-contain rounded-3xl shadow-2xl border border-white/10">
        </div>

        <div class="desktop-container w-full">
            <div class="hero-grid">
                <div class="text-left reveal z-20">
                    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 border-cyan-400/30">
                        <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                        <span class="text-sm text-cyan-400 font-medium tracking-wide uppercase">Next-Gen Temporal Framework</span>
                    </div>
                    <h1 class="hero-title font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                        Synchronize Intent Across Time
                    </h1>
                    <p class="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
                        OnTime Marketing Inc. pioneers the future of decentralized coordination through 
                        <span class="text-cyan-400 font-semibold">TISE</span>, 
                        <span class="text-blue-400 font-semibold">DTIF</span>, and 
                        <span class="text-sky-400 font-semibold">OnTime TIDE</span>.
                    </p>
                    <div class="flex gap-4">
                        <a href="#products" class="btn-primary px-8 py-4 rounded-full font-semibold text-white text-center shadow-xl shadow-blue-600/30">
                            Explore Technology
                        </a>
                        <a href="#contact" class="px-8 py-4 rounded-full font-semibold text-white border border-white/20 hover:bg-white/10 transition-all text-center backdrop-blur-sm">
                            Contact Us
                        </a>
                    </div>
                    
                    <!-- Stats -->
                    <div class="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10">
                        <div>
                            <div class="stat-number" data-target="99.9">0</div>
                            <div class="text-sm text-gray-400 mt-1">% Uptime</div>
                        </div>
                        <div>
                            <div class="stat-number" data-target="50">0</div>
                            <div class="text-sm text-gray-400 mt-1">ms Latency</div>
                        </div>
                        <div>
                            <div class="stat-number" data-target="10">0</div>
                            <div class="text-sm text-gray-400 mt-1">K+ Nodes</div>
                        </div>
                    </div>
                </div>
                
                <div class="relative flex items-center justify-center reveal delay-200 z-20">
                    <div class="relative w-full max-w-lg">
                        <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                        <div class="relative glass-card rounded-3xl p-8 transform hover:scale-105 transition-transform duration-500 border border-cyan-400/20">
                            <div class="grid grid-cols-2 gap-4">
                                <div class="glass-card rounded-2xl p-6 text-center border-cyan-400/20">
                                    <div class="text-3xl font-bold text-cyan-400 mb-2">TISE</div>
                                    <div class="text-xs text-gray-400">Temporal Intent Sync Engine</div>
                                </div>
                                <div class="glass-card rounded-2xl p-6 text-center border-blue-400/20">
                                    <div class="text-3xl font-bold text-blue-400 mb-2">DTIF</div>
                                    <div class="text-xs text-gray-400">Decentralized Temporal Intent Framework</div>
                                </div>
                                <div class="glass-card rounded-2xl p-6 text-center col-span-2 border-sky-400/20">
                                    <div class="text-3xl font-bold text-sky-400 mb-2">OnTime TIDE</div>
                                    <div class="text-xs text-gray-400">Temporal Intent Distribution Engine</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
            <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
        </div>
    </section>

    <!-- Technology Section -->
    <section id="technology" class="section-padding relative">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>
        <div class="desktop-container relative">
            <div class="text-center mb-20 reveal">
                <h2 class="section-title font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Our Technology Stack
                </h2>
                <p class="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
                    Three pillars of temporal coordination revolutionizing how intent flows through decentralized networks. 
                    Built for enterprise scale with cryptographic security.
                </p>
            </div>

            <div class="grid lg:grid-cols-3 gap-8">
                <!-- TISE Card -->
                <div class="feature-card glass-card tech-card rounded-3xl p-10 reveal">
                    <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center mb-8 shadow-lg shadow-cyan-500/30">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <h3 class="text-3xl font-bold mb-3 text-cyan-400">TISE</h3>
                    <p class="text-gray-300 mb-6 font-medium text-lg">Temporal Intent Synchronization Engine</p>
                    <p class="text-gray-400 leading-relaxed mb-8">
                        The core coordination layer that enables real-time synchronization of intent across distributed nodes. 
                        TISE ensures that all participants in the network share a unified temporal state with millisecond precision.
                    </p>
                    <ul class="space-y-3 text-gray-400">
                        <li class="flex items-center gap-3">
                            <span class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"></span>
                            Real-time state consensus
                        </li>
                        <li class="flex items-center gap-3">
                            <span class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"></span>
                            Temporal proof generation
                        </li>
                        <li class="flex items-center gap-3">
                            <span class="w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"></span>
                            Cross-chain coordination
                        </li>
                    </ul>
                </div>

                <!-- DTIF Card -->
                <div class="feature-card glass-card tech-card rounded-3xl p-10 reveal delay-100" style="background: linear-gradient(135deg, rgba(0, 68, 153, 0.1), rgba(0, 102, 204, 0.05)); border-color: rgba(0, 102, 204, 0.2);">
                    <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-8 shadow-lg shadow-blue-500/30">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                        </svg>
                    </div>
                    <h3 class="text-3xl font-bold mb-3 text-blue-400">DTIF</h3>
                    <p class="text-gray-300 mb-6 font-medium text-lg">Decentralized Temporal Intent Framework</p>
                    <p class="text-gray-400 leading-relaxed mb-8">
                        A comprehensive framework for building temporal applications. DTIF provides the tools, protocols, 
                        and standards needed to create intent-driven experiences across any blockchain ecosystem.
                    </p>
                    <ul class="space-y-3 text-gray-400">
                        <li class="flex items-center gap-3">
                            <span class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50"></span>
                            Protocol standardization
                        </li>
                        <li class="flex items-center gap-3">
                            <span class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50"></span>
                            Developer SDK & APIs
                        </li>
                        <li class="flex items-center gap-3">
                            <span class="w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50"></span>
                            Modular architecture
                        </li>
                    </ul>
                </div>

                <!-- OnTime TIDE Card -->
                <div class="feature-card glass-card tech-card rounded-3xl p-10 reveal delay-200" style="background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(0, 150, 255, 0.05)); border-color: rgba(0, 212, 255, 0.2);">
                    <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-400 to-cyan-600 flex items-center justify-center mb-8 shadow-lg shadow-sky-500/30">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                    </div>
                    <h3 class="text-3xl font-bold mb-3 text-sky-400">OnTime TIDE</h3>
                    <p class="text-gray-300 mb-6 font-medium text-lg">Temporal Intent Distribution Engine</p>
                    <p class="text-gray-400 leading-relaxed mb-8">
                        The distribution layer that propagates intent across the network. TIDE ensures low-latency, 
                        high-throughput transmission of temporal data to all network participants with cryptographic verification.
                    </p>
                    <ul class="space-y-3 text-gray-400">
                        <li class="flex items-center gap-3">
                            <span class="w-2 h-2 rounded-full bg-sky-400 shadow-lg shadow-sky-400/50"></span>
                            P2P mesh networking
                        </li>
                        <li class="flex items-center gap-3">
                            <span class="w-2 h-2 rounded-full bg-sky-400 shadow-lg shadow-sky-400/50"></span>
                            Intent routing optimization
                        </li>
                        <li class="flex items-center gap-3">
                            <span class="w-2 h-2 rounded-full bg-sky-400 shadow-lg shadow-sky-400/50"></span>
                            Bandwidth efficiency
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- How It Works Section -->
    <section class="section-padding relative overflow-hidden">
        <div class="desktop-container">
            <div class="text-center mb-20 reveal">
                <h2 class="section-title font-bold mb-6">How It Works</h2>
                <p class="text-gray-400 max-w-2xl mx-auto text-lg">From intent creation to network-wide synchronization in four steps</p>
            </div>

            <div class="relative">
                <!-- Connection Line -->
                <div class="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent transform -translate-y-1/2"></div>
                
                <div class="grid lg:grid-cols-4 gap-8 relative">
                    <div class="glass-card rounded-2xl p-8 text-center reveal relative z-10">
                        <div class="w-16 h-16 rounded-full bg-cyan-400/20 text-cyan-400 flex items-center justify-center mx-auto mb-6 font-bold text-2xl border-2 border-cyan-400/50 shadow-lg shadow-cyan-400/20">1</div>
                        <h4 class="font-bold text-xl mb-3">Intent Creation</h4>
                        <p class="text-gray-400 text-sm leading-relaxed">Users define temporal objectives with smart contract parameters and cryptographic signatures</p>
                    </div>
                    
                    <div class="glass-card rounded-2xl p-8 text-center reveal delay-100 relative z-10">
                        <div class="w-16 h-16 rounded-full bg-blue-400/20 text-blue-400 flex items-center justify-center mx-auto mb-6 font-bold text-2xl border-2 border-blue-400/50 shadow-lg shadow-blue-400/20">2</div>
                        <h4 class="font-bold text-xl mb-3">Validation</h4>
                        <p class="text-gray-400 text-sm leading-relaxed">TISE validates intent against network state and generates temporal proofs</p>
                    </div>
                    
                    <div class="glass-card rounded-2xl p-8 text-center reveal delay-200 relative z-10">
                        <div class="w-16 h-16 rounded-full bg-sky-400/20 text-sky-400 flex items-center justify-center mx-auto mb-6 font-bold text-2xl border-2 border-sky-400/50 shadow-lg shadow-sky-400/20">3</div>
                        <h4 class="font-bold text-xl mb-3">Distribution</h4>
                        <p class="text-gray-400 text-sm leading-relaxed">TIDE propagates intent across the decentralized mesh network instantly</p>
                    </div>
                    
                    <div class="glass-card rounded-2xl p-8 text-center reveal delay-300 relative z-10">
                        <div class="w-16 h-16 rounded-full bg-green-400/20 text-green-400 flex items-center justify-center mx-auto mb-6 font-bold text-2xl border-2 border-green-400/50 shadow-lg shadow-green-400/20">4</div>
                        <h4 class="font-bold text-xl mb-3">Execution</h4>
                        <p class="text-gray-400 text-sm leading-relaxed">Smart contracts execute automatically when temporal conditions are met</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Tokenomics Section -->
    <section id="tokenomics" class="section-padding">
        <div class="desktop-container">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <div class="reveal">
                    <h2 class="section-title font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        Tokenomics & Governance
                    </h2>
                    <p class="text-gray-300 text-xl mb-10 leading-relaxed">
                        The OnTime ecosystem is powered by a utility token that coordinates network incentives, 
                        enables governance participation, and secures the temporal consensus mechanism.
                    </p>
                    
                    <div class="space-y-6">
                        <div class="glass-card rounded-2xl p-6 flex items-start gap-6 hover:border-cyan-400/30 transition-colors">
                            <div class="w-14 h-14 rounded-xl bg-cyan-400/20 flex items-center justify-center flex-shrink-0">
                                <svg class="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-bold text-xl mb-2">Staking Rewards</h4>
                                <p class="text-gray-400 leading-relaxed">Validate temporal states and earn rewards for maintaining network consensus and uptime</p>
                            </div>
                        </div>
                        
                        <div class="glass-card rounded-2xl p-6 flex items-start gap-6 hover:border-blue-400/30 transition-colors">
                            <div class="w-14 h-14 rounded-xl bg-blue-400/20 flex items-center justify-center flex-shrink-0">
                                <svg class="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-bold text-xl mb-2">Governance Rights</h4>
                                <p class="text-gray-400 leading-relaxed">Vote on protocol upgrades, parameter changes, and ecosystem development proposals</p>
                            </div>
                        </div>
                        
                        <div class="glass-card rounded-2xl p-6 flex items-start gap-6 hover:border-sky-400/30 transition-colors">
                            <div class="w-14 h-14 rounded-xl bg-sky-400/20 flex items-center justify-center flex-shrink-0">
                                <svg class="w-7 h-7 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-bold text-xl mb-2">Network Fees</h4>
                                <p class="text-gray-400 leading-relaxed">Pay for intent synchronization, cross-chain messaging, and temporal queries</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="reveal delay-200">
                    <div class="gradient-border-animated rounded-3xl p-10 relative overflow-hidden" style="background: rgba(0, 102, 204, 0.05);">
                        <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl -mr-48 -mt-48"></div>
                        
                        <h3 class="text-3xl font-bold mb-10 text-center relative z-10">Token Distribution</h3>
                        
                        <div class="space-y-6 relative z-10">
                            <div>
                                <div class="flex justify-between mb-3">
                                    <span class="text-gray-300 font-medium">Community & Ecosystem</span>
                                    <span class="text-cyan-400 font-bold text-xl">40%</span>
                                </div>
                                <div class="h-3 bg-gray-800 rounded-full overflow-hidden">
                                    <div class="h-full bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full shadow-lg shadow-cyan-400/30" style="width: 40%"></div>
                                </div>
                            </div>
                            
                            <div>
                                <div class="flex justify-between mb-3">
                                    <span class="text-gray-300 font-medium">Team & Advisors</span>
                                    <span class="text-blue-400 font-bold text-xl">20%</span>
                                </div>
                                <div class="h-3 bg-gray-800 rounded-full overflow-hidden">
                                    <div class="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full shadow-lg shadow-blue-400/30" style="width: 20%"></div>
                                </div>
                            </div>
                            
                            <div>
                                <div class="flex justify-between mb-3">
                                    <span class="text-gray-300 font-medium">Staking Rewards</span>
                                    <span class="text-sky-400 font-bold text-xl">25%</span>
                                </div>
                                <div class="h-3 bg-gray-800 rounded-full overflow-hidden">
                                    <div class="h-full bg-gradient-to-r from-sky-400 to-sky-600 rounded-full shadow-lg shadow-sky-400/30" style="width: 25%"></div>
                                </div>
                            </div>
                            
                            <div>
                                <div class="flex justify-between mb-3">
                                    <span class="text-gray-300 font-medium">Treasury</span>
                                    <span class="text-indigo-400 font-bold text-xl">15%</span>
                                </div>
                                <div class="h-3 bg-gray-800 rounded-full overflow-hidden">
                                    <div class="h-full bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full shadow-lg shadow-indigo-400/30" style="width: 15%"></div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 gap-8 text-center relative z-10">
                            <div class="glass-card rounded-2xl p-4">
                                <div class="text-4xl font-bold text-white mb-1">1B</div>
                                <div class="text-sm text-gray-400 uppercase tracking-wider">Total Supply</div>
                            </div>
                            <div class="glass-card rounded-2xl p-4">
                                <div class="text-4xl font-bold text-white mb-1">4 Years</div>
                                <div class="text-sm text-gray-400 uppercase tracking-wider">Vesting Period</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section-padding relative">
        <div class="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent"></div>
        <div class="desktop-container relative">
            <div class="max-w-4xl mx-auto">
                <div class="glass-card rounded-3xl p-12 reveal border border-cyan-400/20">
                    <div class="text-center mb-12">
                        <h2 class="section-title font-bold mb-4">Get In Touch</h2>
                        <p class="text-gray-400 text-lg">Ready to synchronize your intent? Contact us to learn more about OnTime solutions.</p>
                    </div>
                    
                    <div class="grid grid-cols-2 gap-12 mb-12">
                        <div class="text-center p-6 glass-card rounded-2xl">
                            <div class="w-16 h-16 rounded-2xl bg-cyan-400/20 flex items-center justify-center mx-auto mb-4">
                                <svg class="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <h4 class="font-bold text-xl mb-2">Email</h4>
                            <a href="mailto:heat.terr@iCloud.com" class="text-cyan-400 hover:text-cyan-300 transition-colors text-lg">heat.terr@iCloud.com</a>
                        </div>
                        
                        <div class="text-center p-6 glass-card rounded-2xl">
                            <div class="w-16 h-16 rounded-2xl bg-blue-400/20 flex items-center justify-center mx-auto mb-4">
                                <svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                            </div>
                            <h4 class="font-bold text-xl mb-2">Location</h4>
                            <p class="text-gray-400 text-lg">Global Operations</p>
                        </div>
                    </div>
                    
                    <form class="space-y-6" onsubmit="event.preventDefault(); alert('Thank you for your message! We will get back to you soon.');">
                        <div class="grid grid-cols-2 gap-6">
                            <input type="text" placeholder="Your Name" class="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors text-lg">
                            <input type="email" placeholder="Your Email" class="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors text-lg">
                        </div>
                        <input type="text" placeholder="Subject" class="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors text-lg">
                        <textarea rows="5" placeholder="Your message..." class="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none text-lg"></textarea>
                        <button type="submit" class="w-full btn-primary py-4 rounded-xl font-semibold text-white text-lg shadow-xl shadow-blue-600/30">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-white/10 py-12 px-6 lg:px-12">
        <div class="desktop-container">
            <div class="flex flex-col md:flex-row justify-between items-center gap-6">
                <div class="flex items-center gap-4">
                    <!-- Diamond Logo in Footer -->
                    <div class="diamond-logo" style="width: 40px; height: 40px;">
                        <div class="diamond-glow" style="filter: blur(15px);"></div>
                        <img src="logo.jpg" alt="OnTime Logo" class="w-full h-full object-contain rounded-lg">
                    </div>
                    <div class="flex flex-col">
                        <span class="font-display font-bold text-lg tracking-tight">ON-TIME</span>
                        <span class="text-xs text-gray-500 tracking-widest uppercase">Marketing Inc.</span>
                    </div>
                </div>
                
                <div class="flex gap-8 text-sm text-gray-400">
                    <a href="#" class="hover:text-cyan-400 transition-colors">Privacy Policy</a>
                    <a href="#" class="hover:text-cyan-400 transition-colors">Terms of Service</a>
                    <a href="#" class="hover:text-cyan-400 transition-colors">Documentation</a>
                    <a href="#" class="hover:text-cyan-400 transition-colors">GitHub</a>
                </div>
                
                <div class="text-sm text-gray-600">
                    © 2026 OnTime Marketing Inc. All rights reserved.
                </div>
            </div>
        </div>
    </footer>

    <script>
        // Initialize GSAP ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);
        
        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const closeMenuBtn = document.getElementById('close-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        
        function toggleMenu() {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
            document.body.classList.toggle('overflow-hidden');
        }
        
        mobileMenuBtn.addEventListener('click', toggleMenu);
        closeMenuBtn.addEventListener('click', toggleMenu);
        
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });
        
        // Navigation scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('nav-scrolled');
            } else {
                navbar.classList.remove('nav-scrolled');
            }
        });
        
        // Scroll Reveal Animations
        const revealElements = document.querySelectorAll('.reveal');
        
        revealElements.forEach((element) => {
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                delay: element.classList.contains('delay-100') ? 0.1 : 
                       element.classList.contains('delay-200') ? 0.2 : 
                       element.classList.contains('delay-300') ? 0.3 : 0
            });
        });
        
        // Stats Counter Animation
        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach(stat => {
            const target = parseFloat(stat.getAttribute('data-target'));
            const isDecimal = target % 1 !== 0;
            
            gsap.to(stat, {
                scrollTrigger: {
                    trigger: stat,
                    start: "top 80%",
                },
                innerHTML: target,
                duration: 2,
                snap: { innerHTML: isDecimal ? 0.1 : 1 },
                ease: "power2.out",
                onUpdate: function() {
                    if (isDecimal) {
                        stat.innerHTML = parseFloat(stat.innerHTML).toFixed(1);
                    } else {
                        stat.innerHTML = Math.round(parseFloat(stat.innerHTML));
                    }
                }
            });
        });
        
        // Particle System
        const canvas = document.getElementById('particles');
        const ctx = canvas.getContext('2d');
        let particles = [];
        let animationId;
        
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = Math.random() * 0.3 - 0.15;
                this.speedY = Math.random() * 0.3 - 0.15;
                this.opacity = Math.random() * 0.5 + 0.1;
            }
            
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                
                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;
            }
            
            draw() {
                ctx.fillStyle = `rgba(0, 212, 255, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        function initParticles() {
            particles = [];
            const particleCount = window.innerWidth > 1024 ? 50 : 25;
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }
        
        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            
            // Draw connections
            particles.forEach((a, index) => {
                particles.slice(index + 1).forEach(b => {
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 150) {
                        ctx.strokeStyle = `rgba(0, 212, 255, ${0.15 * (1 - distance / 150)})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                });
            });
            
            animationId = requestAnimationFrame(animateParticles);
        }
        
        initParticles();
        animateParticles();
        
        // Pause animation when tab is hidden
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                cancelAnimationFrame(animationId);
            } else {
                animateParticles();
            }
        });
        
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Parallax effect for hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.gradient-bg');
            if (parallax) {
                parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });
    </script>
</body>
</html>

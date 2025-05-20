const moonpath = "M55 154C55 239.052 158.5 308 158.5 308C70.9629 308 0 239.052 0 154C0 68.9482 70.9629 0 158.5 0C158.5 0 55 68.9482 55 154Z";

const sunpath = "M317 154C317 239.052 246.037 308 158.5 308C70.9629 308 0 239.052 0 154C0 68.9482 70.9629 0 158.5 0C246.037 0 317 68.9482 317 154Z";
const darkmode = document.querySelector("#darkmode")

let toggle = false;

darkmode.addEventListener('click', () => {

    const timeline = anime.timeline({
        duration: 2000,
        easing: "easeOutExpo",
    });

    timeline.add({
        targets: ".sun",
        d: [
            {
                value: toggle ? sunpath : moonpath
            }
        ]
    }).add({
        targets: "#darkmode",
        rotate: 320,
    }, '-=1000').add({
        targets: "body",
        backgroundColor: toggle ? "rgb(255, 255, 255)" : "rgb(44, 42, 42)",
        color: toggle ? "rgb(44, 42, 42)" : "rgb(255, 255, 255)"
    }, '-=700')

    if (!toggle) {
        toggle = true;
        document.querySelector("#text");
    }
    else {
        toggle = false;
        document.querySelector("#text");
    }

})

const translations = {
    English: {
        logo: "Dossier",
        tagline: "Building in public, learning in real-time",
        MyName: "Hi, I'm Mani Bro.",
        Fresh: "Fresh to the field, fierce with the frontend",
        subtitle: "Junior by title, creator by mindset",
        btn_primary: "View Project",
        Follow: "Follow my dev journey:",
        AboutMe: "About Me",
        AboutMeText: "I’m a dedicated developer with a B.Sc. in IT and an MCA,combining technical knowledge and practical experience to build efficient, user-friendly applications"
        , MCA: "Master of Computer Applications",
        MCA_College: "VHNSNC COLLEGE (AUTONOMOUS)",
        MCA_Skills: "Python, Sql, Android",
        BSC: "B.SC INFORMATION TECHNOLOGY",
        BSC_College: "SRI KALISWARI COLLEGE (AUTONOMOUS)",
        BSC_Skills: "Php, Java, WebDevelopment",
        download: "Download",
        Projects_title: "Things I’ve Built",
        WatchManagementSystem: "Watch Management System",
        WatchManagementSystemText: "A simple and elegant system to manage watch collections, allowing users to add, edit, and delete watch records.",
        WatchManagementSystemTechStack: "Tech Stack Used:",
        WatchManagementSystemDemo: "Live Demo",
        WatchManagementSystemCode: "Source Code",
        DeepLearnWebsite: "Deep Learn Website",
        DeepLearnWebsiteText: "A modern, user-friendly learning platform designed to deliver courses, videos, and quizzes with a responsive interface",
        DeepLearnWebsiteTechStack: "Tech Stack Used:",
        DeepLearnWebsiteDemo: "Live Demo",
        DeepLearnWebsiteCode: "Source Code",
        WhatIDo: "What I Do",
        WebDevelopment: "Web Development",
        WebDevelopmentText: "I build responsive, fast-loading, and user-friendly websites using modern technologies and best practices.",
        ui_ux: "UI/UX Design",
        UiUXText: "Every pixel and interaction is thoughtfully crafted to guide users, solve problems, and elevate your brand’s identity.",
        PPT: "PPT",
        PPTText: "I craft engaging and visually stunning PowerPoint presentations that enhance storytelling and deliver impact.",
        DataAnalysis: "Data Analysis",
        DataAnalysisText: "I transform raw data into insights that help businesses make smarter decisions.",
        Android: "Android",
        AndroidText: "I specialize in Android development, crafting user-friendly mobile applications that enhance productivity.",
        ContactUs: "Contact Us",
        ContactText: "just a hello — I’m all ears. Contact me anytime!",
        copyright: "© 2023 Mani Selvam. All rights reserved.",
    },
    Tamil: {
        logo: "ஆவணம்",
        tagline: "பொது இடத்தில் கட்டமைக்கிறது, நேரத்தில் கற்றுக்கொள்கிறது",
        MyName: "வணக்கம், நான் மணி ப்ரோ.",
        Fresh: "புதிய துறையில், முன்னணி வடிவமைப்பில் கடுமையான",
        subtitle: "தலைப்பில் ஜூனியர், மனப்பான்மையில் உருவாக்குபவர்",
        btn_primary: "திட்டத்தைப் பார்வையிடவும்",
        Follow: "என் டெவ் பயணத்தைப் பின்தொடருங்கள்:",
        AboutMe: "என்னைப் பற்றி",
        AboutMeText: "நான் ஒரு அர்ப்பணிக்கப்பட்ட டெவலப்பர், IT-ல் B.Sc. மற்றும் MCA-ஐ கொண்டுள்ளேன், தொழில்நுட்ப அறிவையும் நடைமுறை அனுபவத்தையும் இணைத்து பயனர் நட்பு பயன்பாடுகளை உருவாக்குகிறேன்",
        MCA: "கணினி பயன்பாடுகளில் முதுகலை",
        MCA_College: "VHNSNC கல்லூரி (தன்னாட்சி)",
        MCA_Skills: "பைதான், எஸ்க்யூஎல், ஆண்ட்ராய்டு",
        BSC: "B.Sc தகவல் தொழில்நுட்பம்",
        BSC_College: "ஸ்ரீ கலிஸ்வரி கல்லூரி (தன்னாட்சி)",
        BSC_Skills: "Php, Java, WebDevelopment",
        download: "பதிவிறக்கவும்",
        Projects_title: "நான் கட்டிய விஷயங்கள்",
        WatchManagement_System: "கடிகார மேலாண்மை அமைப்பு",
        WatchManagementSystemText: "கடிகார சேகரிப்புகளை நிர்வகிக்க ஒரு எளிமையான மற்றும் அழகான அமைப்பு, பயனர்களுக்கு கடிகார பதிவுகளைச் சேர்க்க, திருத்த மற்றும் நீக்க அனுமதிக்கிறது.",
        WatchManagementSystemTechStack: "பயன்படுத்திய தொழில்நுட்பக் குவியல்:",
        WatchManagementSystemDemo: "நேரடி டெமோ",
        WatchManagementSystemCode: "மூலக் குறியீடு",
        DeepLearnWebsite: "Deep Learn வலைத்தளம்",
        DeepLearnWebsiteText: "பாடங்கள், வீடியோக்கள் மற்றும் வினாடி வினா கற்றுக்கொடுக்க வடிவமைக்கப்பட்ட நவீன, பயனர் நட்பு கற்றல் தளம், பதிலளிக்கும் இடைமுகத்துடன்",
        DeepLearnWebsiteTechStack: "பயன்படுத்திய தொழில்நுட்பக் குவியல்:",
        DeepLearnWebsiteDemo: "நேரடி டெமோ",
        DeepLearnWebsiteCode: "மூலக் குறியீடு",
        WhatIDo: "நான் என்ன செய்கிறேன்",
        WebDevelopment: "வலை வளர்ச்சி",
        WebDevelopmentText: "நான் நவீன தொழில்நுட்பங்கள் மற்றும் சிறந்த நடைமுறைகளைப் பயன்படுத்தி பதிலளிக்கும், வேகமாக ஏற்றப்படும் மற்றும் பயனர் நட்பு வலைத்தளங்களை உருவாக்குகிறேன்.",
        ui_ux: "UI/UX வடிவமைப்பு",
        UiUXText: "ஒவ்வொரு பிக்சலும் மற்றும் தொடர்பும் பயனர்களை வழிநடத்த, சிக்கல்களைத் தீர்க்க, உங்கள் பிராண்டின் அடையாளத்தை உயர்த்துவதற்காக கவனமாக வடிவமைக்கப்பட்டுள்ளது.",
        PPT: "PPT",
        PPTText: "நான் கதை சொல்லலை மேம்படுத்தும் மற்றும் தாக்கத்தை வழங்கும் ஈர்க்கக்கூடிய மற்றும் பார்வை அழகான PowerPoint விளக்கக்குறிப்புகளை உருவாக்குகிறேன்.",
        DataAnalysis: "தரவியல் பகுப்பாய்வு",
        DataAnalysisText: "நான் கச்சா தரவுகளை உள்ளடக்கமாக மாற்றுகிறேன், இது நிறுவனங்களுக்கு புத்திசாலித்தனமான முடிவுகளை எடுக்க உதவுகிறது.",
        Android: "ஆண்ட்ராய்டு",
        AndroidText: "நான் ஆண்ட்ராய்டு வளர்ச்சியில் நிபுணத்துவம் பெற்றுள்ளேன், பயனர் நட்பு மொபைல் பயன்பாடுகளை உருவாக்குகிறேன், இது உற்பத்தித்திறனை மேம்படுத்துகிறது.",
        ContactUs: "எங்களை தொடர்பு கொள்ளவும்",
        ContactText: "ஒரு வணக்கம் - நான் எல்லாம் காதுகள். எப்போது வேண்டுமானாலும் என்னை தொடர்பு கொள்ளவும்!",
        copyright: "© 2023 Mani Selvam. All rights reserved."
    },
    Hindi: {
        logo: "डॉसियर",
        tagline: "सार्वजनिक रूप से निर्माण करना, वास्तविक समय में सीखना",
        MyName: "नमस्ते, मैं मणि ब्रो हूं।",
        Fresh: "क्षेत्र में ताजा, फ्रंटएंड के साथ उग्र",
        subtitle: "शीर्षक द्वारा जूनियर, मानसिकता द्वारा निर्माता",
        btn_primary: "परियोजना देखें",
        Follow: "मेरी डेवलपमेंट यात्रा का पालन करें:",
        AboutMe: "मेरे बारे में",
        AboutMeText: "मैं एक समर्पित डेवलपर हूं, जिसमें IT में B.Sc. और MCA, तकनीकी ज्ञान और व्यावहारिक अनुभव को कुशल, उपयोगकर्ता के अनुकूल अनुप्रयोगों का निर्माण करने के लिए जोड़ता है",
        MCA: "कंप्यूटर अनुप्रयोगों में स्नातकोत्तर",
        MCA_College: "VHNSNC कॉलेज (स्वायत्त)",
        MCA_Skills: "पायथन, एसक्यूएल, एंड्रॉइड",
        BSC: "बी.एससी सूचना प्रौद्योगिकी",
        BSC_College: "श्री कलिस्वरी कॉलेज (स्वायत्त)",
        BSC_Skills: "Php, जावा, वेब विकास",
        download: "डाउनलोड करें",
        Projects_title: "मैंने जो चीजें बनाई हैं",
        WatchManagementSystem: "घड़ी प्रबंधन प्रणाली",
        WatchManagementSystemText: "घड़ी संग्रहों का प्रबंधन करने के लिए एक सरल और सुरुचिपूर्ण प्रणाली, उपयोगकर्ताओं को घड़ी के रिकॉर्ड जोड़ने, संपादित करने और हटाने की अनुमति देती है।",
        WatchManagementSystemTechStack: "प्रौद्योगिकी स्टैक का उपयोग किया गया:",
        WatchManagementSystemDemo: "लाइव डेमो",
        WatchManagementSystemCode: "स्रोत कोड",
        DeepLearnWebsite: "डीप लर्न वेबसाइट",
        DeepLearnWebsiteText: "पाठ्यक्रमों, वीडियो और प्रश्नोत्तरी को एक उत्तरदायी इंटरफ़ेस के साथ वितरित करने के लिए डिज़ाइन किया गया एक आधुनिक, उपयोगकर्ता के अनुकूल शिक्षण मंच",
        DeepLearnWebsiteTechStack: "प्रौद्योगिकी स्टैक का उपयोग किया गया:",
        DeepLearnWebsiteDemo: "लाइव डेमो",
        DeepLearnWebsiteCode: "स्रोत कोड",
        WhatIDo: "मैं क्या करता हूं",
        WebDevelopment: "वेब विकास",
        WebDevelopmentText: "मैं आधुनिक तकनीकों और सर्वोत्तम प्रथाओं का उपयोग करके उत्तरदायी, तेज़-लोडिंग और उपयोगकर्ता के अनुकूल वेबसाइटें बनाता हूं।",
        ui_ux: "यूआई/यूएक्स डिज़ाइन",
        UiUXText: "हर पिक्सेल और इंटरैक्शन को इस तरह से तैयार किया गया है कि यह उपयोगकर्ताओं को मार्गदर्शन करे, समस्याओं को हल करे और आपके ब्रांड की पहचान को बढ़ाए।",
        PPT: "पीपीटी",
        PPTText: "मैं आकर्षक और दृश्य रूप से आश्चर्यजनक PowerPoint प्रस्तुतियाँ बनाता हूँ जो कहानी कहने को बढ़ाती हैं और प्रभाव डालती हैं।",
        DataAnalysis: "डेटा विश्लेषण",
        DataAnalysisText: "मैं कच्चे डेटा को अंतर्दृष्टि में बदलता हूं जो व्यवसायों को स्मार्ट निर्णय लेने में मदद करता है।",
        Android: "एंड्रॉइड",
        AndroidText: "मैं एंड्रॉइड विकास में विशेषज्ञता रखता हूं, उपयोगकर्ता के अनुकूल मोबाइल अनुप्रयोगों को तैयार करता हूं जो उत्पादकता बढ़ाते हैं।",
        ContactUs: "संपर्क करें",
        ContactText: "बस एक नमस्ते - मैं सभी कान हूं। कभी भी मुझसे संपर्क करें!",
        copyright: "© 2023 Mani Selvam. All rights reserved."

    },

};



document.querySelector(".language-selector-tab").addEventListener("change", function () {
    const selectedLang = this.value;
    document.getElementById("logo").innerText = translations[selectedLang].logo;
    document.getElementById("tagline").innerText = translations[selectedLang].tagline;
    console.log(document.getElementById("MyName").innerText = translations[selectedLang].MyName)
    document.getElementById("Fresh").innerText = translations[selectedLang].Fresh;
    document.getElementById("subtitle").innerText = translations[selectedLang].subtitle;
    document.getElementById("btn_primary").innerText = translations[selectedLang].btn_primary;
    document.getElementById("AboutMe").innerText = translations[selectedLang].AboutMe;
    document.getElementById("AboutMeText").innerText = translations[selectedLang].AboutMeText;
    document.getElementById("MCA").innerText = translations[selectedLang].MCA;
    document.getElementById("MCA_College").innerText = translations[selectedLang].MCA_College;
    document.getElementById("MCA_Skills").innerText = translations[selectedLang].MCA_Skills;
    document.getElementById("BSC").innerText = translations[selectedLang].BSC;
    document.getElementById("BSC_College").innerText = translations[selectedLang].BSC_College;
    document.getElementById("BSC_Skills").innerText = translations[selectedLang].BSC_Skills;
    document.getElementById("download").innerText = translations[selectedLang].download;
    document.getElementById("Projects-title").innerText = translations[selectedLang].Projects_title;
    document.getElementById("WatchManagement_System").innerText = translations[selectedLang].WatchManagement_System;
    document.getElementById("WatchManagementSystemText").innerText = translations[selectedLang].WatchManagementSystemText;
    document.getElementById("WatchManagementSystemTechStack").innerText = translations[selectedLang].WatchManagementSystemTechStack;
    document.getElementById("WatchManagementSystemDemo").innerText = translations[selectedLang].WatchManagementSystemDemo;
    document.getElementById("WatchManagementSystemCode").innerText = translations[selectedLang].WatchManagementSystemCode;
    document.getElementById("DeepLearnWebsite").innerText = translations[selectedLang].DeepLearnWebsite;
    document.getElementById("DeepLearnWebsiteText").innerText = translations[selectedLang].DeepLearnWebsiteText;
    document.getElementById("DeepLearnWebsiteTechStack").innerText = translations[selectedLang].DeepLearnWebsiteTechStack;
    document.getElementById("DeepLearnWebsiteDemo").innerText = translations[selectedLang].DeepLearnWebsiteDemo;
    document.getElementById("DeepLearnWebsiteCode").innerText = translations[selectedLang].DeepLearnWebsiteCode;
    document.getElementById("WhatIDo").innerText = translations[selectedLang].WhatIDo;
    document.getElementById("WebDevelopment").innerText = translations[selectedLang].WebDevelopment;
    document.getElementById("WebDevelopmentText").innerText = translations[selectedLang].WebDevelopmentText;
    document.getElementById("ui_ux").innerText = translations[selectedLang].ui_ux;
    document.getElementById("UiUXText").innerText = translations[selectedLang].UiUXText;
    document.getElementById("PPT").innerText = translations[selectedLang].PPT;
    document.getElementById("PPTText").innerText = translations[selectedLang].PPTText;
    document.getElementById("DataAnalysis").innerText = translations[selectedLang].DataAnalysis;
    document.getElementById("DataAnalysisText").innerText = translations[selectedLang].DataAnalysisText;
    document.getElementById("Android").innerText = translations[selectedLang].Android;
    document.getElementById("AndroidText").innerText = translations[selectedLang].AndroidText;
    document.getElementById("ContactUs").innerText = translations[selectedLang].ContactUs;
    document.getElementById("ContactText").innerText = translations[selectedLang].ContactText;
    document.getElementById("copyright").innerText = translations[selectedLang].copyright;
});
document.querySelector(".language-selector").addEventListener("change", function () {
    const selectedLang = this.value;
    document.getElementById("logo").innerText = translations[selectedLang].logo;
    document.getElementById("tagline").innerText = translations[selectedLang].tagline;
    console.log(document.getElementById("MyName").innerText = translations[selectedLang].MyName)
    document.getElementById("Fresh").innerText = translations[selectedLang].Fresh;
    document.getElementById("subtitle").innerText = translations[selectedLang].subtitle;
    document.getElementById("btn_primary").innerText = translations[selectedLang].btn_primary;
    document.getElementById("AboutMe").innerText = translations[selectedLang].AboutMe;
    document.getElementById("AboutMeText").innerText = translations[selectedLang].AboutMeText;
    document.getElementById("MCA").innerText = translations[selectedLang].MCA;
    document.getElementById("MCA_College").innerText = translations[selectedLang].MCA_College;
    document.getElementById("MCA_Skills").innerText = translations[selectedLang].MCA_Skills;
    document.getElementById("BSC").innerText = translations[selectedLang].BSC;
    document.getElementById("BSC_College").innerText = translations[selectedLang].BSC_College;
    document.getElementById("BSC_Skills").innerText = translations[selectedLang].BSC_Skills;
    document.getElementById("download").innerText = translations[selectedLang].download;
    document.getElementById("Projects-title").innerText = translations[selectedLang].Projects_title;
    document.getElementById("WatchManagement_System").innerText = translations[selectedLang].WatchManagement_System;
    document.getElementById("WatchManagementSystemText").innerText = translations[selectedLang].WatchManagementSystemText;
    document.getElementById("WatchManagementSystemTechStack").innerText = translations[selectedLang].WatchManagementSystemTechStack;
    document.getElementById("WatchManagementSystemDemo").innerText = translations[selectedLang].WatchManagementSystemDemo;
    document.getElementById("WatchManagementSystemCode").innerText = translations[selectedLang].WatchManagementSystemCode;
    document.getElementById("DeepLearnWebsite").innerText = translations[selectedLang].DeepLearnWebsite;
    document.getElementById("DeepLearnWebsiteText").innerText = translations[selectedLang].DeepLearnWebsiteText;
    document.getElementById("DeepLearnWebsiteTechStack").innerText = translations[selectedLang].DeepLearnWebsiteTechStack;
    document.getElementById("DeepLearnWebsiteDemo").innerText = translations[selectedLang].DeepLearnWebsiteDemo;
    document.getElementById("DeepLearnWebsiteCode").innerText = translations[selectedLang].DeepLearnWebsiteCode;
    document.getElementById("WhatIDo").innerText = translations[selectedLang].WhatIDo;
    document.getElementById("WebDevelopment").innerText = translations[selectedLang].WebDevelopment;
    document.getElementById("WebDevelopmentText").innerText = translations[selectedLang].WebDevelopmentText;
    document.getElementById("ui_ux").innerText = translations[selectedLang].ui_ux;
    document.getElementById("UiUXText").innerText = translations[selectedLang].UiUXText;
    document.getElementById("PPT").innerText = translations[selectedLang].PPT;
    document.getElementById("PPTText").innerText = translations[selectedLang].PPTText;
    document.getElementById("DataAnalysis").innerText = translations[selectedLang].DataAnalysis;
    document.getElementById("DataAnalysisText").innerText = translations[selectedLang].DataAnalysisText;
    document.getElementById("Android").innerText = translations[selectedLang].Android;
    document.getElementById("AndroidText").innerText = translations[selectedLang].AndroidText;
    document.getElementById("ContactUs").innerText = translations[selectedLang].ContactUs;
    document.getElementById("ContactText").innerText = translations[selectedLang].ContactText;
    document.getElementById("copyright").innerText = translations[selectedLang].copyright;
});

let contact = document.getElementById("contactform")
contact.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent form from refreshing page

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const mailtoLink = `mailto:maniselvam2023@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
});





const sectionContainer = document.querySelectorAll('.section-container');
const aboutContainer = document.querySelectorAll('.about-container');
const projectsSection = document.querySelectorAll('.projects-section');
const services = document.querySelectorAll('.services');
const contactSection = document.querySelectorAll('.contact-section');
const footerSection = document.querySelectorAll('.footer-container');


const Observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const secBox = entry.target.querySelectorAll('.sec-box');
            const aboutBox = entry.target.querySelectorAll('.about-box');
            const projectBox = entry.target.querySelectorAll('.project-box');
            const Service = entry.target.querySelectorAll('.service');
            const contact = entry.target.querySelectorAll('.contact');
            const footer = entry.target.querySelectorAll('.footer-box');

            anime({
                targets: secBox,
                opacity: [0, 1],
                translateY: [300, 0],
                delay: anime.stagger(150), // delay between boxes
                duration: 2000,
                easing: 'easeOutQuad'
            });
            anime({
                targets: aboutBox,
                opacity: [0, 1],
                translateY: [300, 0],
                delay: anime.stagger(150), // delay between boxes
                duration: 2000,
                easing: 'easeOutQuad'
            });
            anime({
                targets: projectBox,
                opacity: [0, 1],
                translateY: [300, 0],
                delay: anime.stagger(150), // delay between boxes
                duration: 2000,
                easing: 'easeOutQuad'
            });
            anime({
                targets: Service,
                opacity: [0, 1],
                translateY: [300, 0],
                delay: anime.stagger(150), // delay between boxes
                duration: 2000,
                easing: 'easeOutQuad'
            });
            anime({
                targets: contact,
                opacity: [0, 1],
                translateY: [300, 0],
                delay: anime.stagger(150), // delay between boxes
                duration: 2000,
                easing: 'easeOutQuad'
            });
            anime({
                targets: footer,
                opacity: [0, 1],
                translateY: [300, 0],
                delay: anime.stagger(150), // delay between boxes
                duration: 2000,
                easing: 'easeOutQuad'
            });
        } else {
            // Reset boxes so animation can happen again
            const secBox = entry.target.querySelectorAll('.sec-box');
            const aboutBox = entry.target.querySelectorAll('.about-box');
            const projectBox = entry.target.querySelectorAll('.project-box');
            const Service = entry.target.querySelectorAll('.service');
            const contact = entry.target.querySelectorAll('.contact');
            const footer = entry.target.querySelectorAll('.footer-box');
            secBox.forEach(box => {
                box.style.opacity = 0;
                box.style.transform = 'translateY(200px)';
            });
            aboutBox.forEach(box => {
                box.style.opacity = 0;
                box.style.transform = 'translateY(200px)';
            });
            projectBox.forEach(box => {
                box.style.opacity = 0;
                box.style.transform = 'translateY(200px)';
            });
            Service.forEach(box => {
                box.style.opacity = 0;
                box.style.transform = 'translateY(200px)';
            });
            contact.forEach(box => {
                box.style.opacity = 0;
                box.style.transform = 'translateY(200px)';
            });
            footer.forEach(box => {
                box.style.opacity = 0;
                box.style.transform = 'translateY(200px)';
            });
        }
    });
}, {
    threshold: 0.2
});

sectionContainer.forEach(container => Observer.observe(container));
aboutContainer.forEach(container => Observer.observe(container));
projectsSection.forEach(container => Observer.observe(container));
services.forEach(container => Observer.observe(container));
contactSection.forEach(container => Observer.observe(container));
footerSection.forEach(container => Observer.observe(container));

const toggleBtn = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
function closeMenu() {
    navMenu.classList.remove('open');
    toggleBtn.innerHTML = '&#9776;';
}

toggleBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    toggleBtn.innerHTML = isOpen ? '&times;' : '&#9776;';

});

// Close menu on nav link click
document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// ✅ Close menu if user scrolls
let lastScroll = window.scrollY;
window.addEventListener('scroll', () => {
    if (navMenu.classList.contains('open')) {
        closeMenu();
    }
});
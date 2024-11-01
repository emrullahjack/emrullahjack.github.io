$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".nav-link").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  // Navbar
  let lanPrefArr = document.getElementsByClassName("lan-pref");
  let navLinkArr = document.getElementsByClassName("nav-link");

  // About Us Division
  let aboutUsHeader = document.getElementById("aboutUsHeader");
  let aboutUsPara = document.getElementById("aboutUsPara");

  // Projects Division
  let projectsHeader = document.getElementById("projectsHeader");
  let projectsZeroPara = document.getElementById("projectsZeroPara");
  let projectsOnePara = document.getElementById("projectsOnePara");

  // Team Division
  let teamHeader = document.getElementById("teamHeader");
  let teaMemBriefArr = document.getElementsByClassName("teaMemBrief");
  let teamContributorsHeader = document.getElementById("teamContributorsHeader");
  let contriBriefArr = document.getElementsByClassName("contriBrief");

  // Contact Division
  let ftContactPara = document.getElementById("ftContactPara");

  // --- Language Preference ---

  let trContent = {
    navLinkText: ["Hakkımızda", "Projelerimiz", "Takım", "İletişim"],
    aboutUsHeader: "KoyuLab Hakkında",
    aboutUsPara: "KoyuLab 2018 yılında Emrullah Öztosun tarafından bir fikir olarak başladı. Bu laboratuarın ana amacı; IoT ve Robotik bilimler alanını basitleştirerek saha ile ilgili daha az kabiliyete sahip ve kendi projelerini internete bağlama konusunda sıkıntı yaşayan arkadaşlara destek olmak, ve fiziksel hesaplama alanında Allah'ı daha iyi tanımak adına araştırma çalışmaları yürütmektir. <br><br>Bu doğrultuda, ürettiğimiz projeler vesilesiyle önemli ilerlemeler kaydettik ve daha da fazlasını yapmayı ümit ediyoruz!",
    projectsHeader: "Projelerimiz",
    projectsZeroPara: "nomat genel amaçlı, insansız bir kara aracıdır (IKA). Akıllı, küçük ve hızlıdır. Özenle tasarlanmış ve uygulamaya dökülmüş kod tabanına sahip, nazikçe modifiye edilmiş standart elektronik devrelerden meydana gelmektedir. 3D yazıcı ile üretilebilir mekanik parçalara sahiptir. <b>2024 Kasım ayı itibariyle geliştirilmeye devam edilmektedir.</b><br><a class=\"text-success\" href=\"./nomat-pt3.html\">nomat pt-3 geliştirme girdileri</a>",
    projectsOnePara: "<a href=\"https://koyubulut.com.tr/\" target=\"_blank\" class=\"text-success\">KoyuBulut</a> Nesnelerin interneti ve robotik bilim alanlarına yönelik minimalist bir platformdur. Nesnelerin interneti projelerinizi sağladığı ücretsiz MQTT sunucusuna bağlayabilir ve projelerinize interneti olan her yerden erişebilirsiniz. Aynı zamanda nesnelerin interneti tabanlı hizmet alım/satımı yapabilirsiniz (geliştirilmektedir).<br><br><b>2024 Kasım ayı itibariyle geliştirilmeye devam edilmektedir.</b>",
    teamHeader: "Takım",
    teaMemBriefArr: ["Kurucu ve geliştirici", "Uzaktan denetçi", "Bilgisayarlı görüntüleme geliştiricisi", "Çevirmen (Türkçe / Ingilizce)", "Elektrik/Elektronik Mühendisi"],
    ftContactPara: "Danışma, destek verme, geri bildirim ve iletişim için <a class=\"text-success\" href=\"mailto:emrullah@koyulab.tr\">emrullah@koyulab.tr</a> adresine mail atabilirsiniz. <br>KoyuLab Takımı tarafından 💚 ile geliştirildi (Kasım 2024'de güncellendi)",
    teamContributorsHeader: "Destek Verenler",
    contriBriefArr: ["Teknik danışman", "Deneysel veri toplayıcısı"]
  }

  let enContent = {
    navLinkText: ["About Us", "Projects", "Team", "Contact"],
    aboutUsHeader: "About KoyuLab",
    aboutUsPara: "KoyuLab started as an idea in 2018 by Emrullah Öztosun. This lab's main goals are to simplify IoT and Robotics fields, encourage people with less skills and knowledge to build things of their own and connect them to the internet, and make further research in physical computing for knowing Allah better. <br><br>To pursue these goals, we have been working relentlessly for the past 6 years. We made significant progress to achieve our goals with our projects and we dream making more!",
    projectsHeader: "Projects",
    projectsZeroPara: "nomat is a general purpose unmanned land vehicle (ULV). It is smart, small and swift. It has an elaborately designed and rigorously implemented software, gently modified off-the-shelf electronics, and 3D printable mechanical parts. <b>Currently in development as of October 2024.</b> <br>",
    projectsOnePara: "KoyuBulut is a minimalist platform for IoT and Robotics purposes. It serves as an MQTT broker and also provides an interface full of various widgets for use by IoT makers. It also enables buying and selling IoT based services.<br><br><b>Currently in development as of October 2024.</b>",
    teamHeader: "Team",
    teaMemBriefArr: ["Founder &amp; Developer", "Remote Tester", "Computer Vision Developer", "Translator (Turkish/English)", "Electrical/Electronics Engineer"],
    ftContactPara: "For all inquiries, recommendations, feedback, etc. <a class=\"text-success\" href=\"mailto:emrullah@koyulab.tr\">emrullah@koyulab.tr</a><br>Designed by KoyuLab team with 💚 (updated on October 2024)",
    teamContributorsHeader: "Contributors",
    contriBriefArr: ["Technical Advisor", "Empirical Data Collector"]
  }

  function translateContent(lanContentObj) {
    for (let i = 0; i < lanContentObj.navLinkText.length; i++) {
      navLinkArr[i].innerHTML = lanContentObj.navLinkText[i];
    }
    aboutUsHeader.innerHTML = lanContentObj.aboutUsHeader;
    aboutUsPara.innerHTML = lanContentObj.aboutUsPara;
    projectsHeader.innerHTML = lanContentObj.projectsHeader;
    projectsZeroPara.innerHTML = lanContentObj.projectsZeroPara;
    projectsOnePara.innerHTML = lanContentObj.projectsOnePara;
    teamHeader.innerHTML = lanContentObj.teamHeader;

    for (let i = 0; i < teaMemBriefArr.length; i++) {
      teaMemBriefArr[i].innerHTML = lanContentObj.teaMemBriefArr[i];
    }

    teamContributorsHeader.innerHTML = lanContentObj.teamContributorsHeader;

    for (let i = 0; i < contriBriefArr.length; i++) {
      contriBriefArr[i].innerHTML = lanContentObj.contriBriefArr[i];
    }

    ftContactPara.innerHTML = lanContentObj.ftContactPara;
  }

  lanPrefArr[0].addEventListener("click", function () {
    translateContent(enContent);
  });
  lanPrefArr[1].addEventListener("click", function () {
    translateContent(trContent);
  });
});

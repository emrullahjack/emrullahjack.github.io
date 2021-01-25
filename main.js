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
    aboutUsPara: "KoyuLab 2018 yılında Emrullah Öztosun tarafından bir fikir olarak başladı. Bu laboratuarın ana amacı; IoT ve Robotik bilimler alanını basitleştirerek saha ile ilgili daha az kabiliyete sahip ve kendi projelerini internete aktarma konusunda sıkıntı yaşayan arkadaşlara destek olmak, ve fiziksel hesaplama alanında araştırma ve geliştirme çalışmaları yürütmektir. <br><br>İdeallerimizi gerçekleştirmek,yeteneklerimizi geliştirmek ve bilgi haznemizi genişletmek için üç senedir amansızca çalışmaktayız. Hayallerimizi gerçekleştirme konusunda önemli ilerlemeler kaydettik ve daha da fazlasını yapmayı hayal ediyoruz!",
    projectsHeader: "Projelerimiz",
    projectsZeroPara: "nomat günlük işlerinizde size yardım eden yararlı bir robot olması amaçlanmaktadır. Akıllı, küçük ve hızlıdır. Açık-kod kaynağına sahip, nazikçe modifiye edilmiş standart elektronik devrelerden meydana gelmektedir. 3D yazıcı ile üretilebilir mekanik parçalara sahiptir. <br><br><b>2021 ocak itibariyle geliştirilmeye devam edilmektedir.</b>",
    projectsOnePara: "Göcheni IoT ve Robotik bilim alanlarına amade, minimalist bir platformdur. Hakkında daha fazla bilgi sahibi olmak için platformu <a class=\"text-success\" href=\"https://www.gocheni.com\">ziyaret etmeyi unutmayın.<a> <br><br><b>2021 ocak itibariyle geliştirilmeye devam edilmektedir.</b>",
    teamHeader: "Takım",
    teaMemBriefArr: ["Kurucu ve lider geliştirici", "Mobil geliştirici ve denetçi", "Bilgisayarlı görüntüleme geliştiricisi", "Sosyal İlişkiler Sorumlusu ve Çevirmen"],
    ftContactPara: "Danışma, geri bildirim ve tavsiyeleriniz için <a class=\"text-success\" href=\"mailto:emrullahjack@gmail.com\">emrullahjack@gmail.com</a> adresine mail atmaktan çekinmeyin. <br>KoyuLab Takımı tarafından 💚 ile geliştirildi (updated on Jan. 2021)",
    teamContributorsHeader: "Destek Verenler",
    contriBriefArr: ["Teknik danışman (Ericsson'da yazılım mühendisi)"]
  }

  let enContent = {
    navLinkText: ["About Us", "Projects", "Team", "Contact"],
    aboutUsHeader: "About KoyuLab",
    aboutUsPara: "KoyuLab started as an idea in 2018 by Emrullah Jack Oztosun. This lab's main goals are to simplfy IoT and Robotics fields, encourage people with less skills and knowledge to build things of their own and connect them to the internet, and make further research in physical computing. <br><br>To pursue these goals, improve our skill set, and expand our knowledge base, we have been working relentlessly for the past 3 years. We made significant progress to achieve our goals with our projects and we dream making more!",
    projectsHeader: "Projects",
    projectsZeroPara: "nomat is aimed to be a utility robot that helps you accomplish your daily tasks. It is smart, small and swift. It has open-source software, gently modified off-the-shelf electronics, and 3D printable mechanical parts. <br><br><b>Currently in development as of January 2021.</b>",
    projectsOnePara: "Göcheni is a minimalist platform for IoT and Robotics purposes. To learn more about it, feel free to <a class=\"text-success\" href=\"https://www.gocheni.com\">visit the platform</a> <br><br><b>Currently in development as of January 2021.</b>",
    teamHeader: "Team",
    teaMemBriefArr: ["Founder &amp; Lead Developer", "Mobile Developer &amp; Tester", "Computer Vision Developer", "Social Relations Support &amp; Translator"],
    ftContactPara: "For all inquiries, recommendations, feedback or anything else, email to <a class=\"text-success\" href=\"mailto:emrullahjack@gmail.com\">emrullahjack@gmail.com</a><br>Designed by KoyuLab team with 💚 (updated on Jan. 2021)",
    teamContributorsHeader: "Contributors",
    contriBriefArr: ["Technical Advisor (Software Engineer at Ericsson)"]
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

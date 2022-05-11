document.getElementById("yabancıDizi").addEventListener("change", yabancıDizi);
document.getElementById("yerliDizi").addEventListener("change", yerliDizi);
document.getElementById("yabancıFilm").addEventListener("change", yabancıFilm);
document.getElementById("yerliFilm").addEventListener("change", yerliFilm);
let sonucbaslik=document.getElementById("sonucbaslik");

function yabancıDizi(){
    sonucbaslik.classList.remove("vh","me","ge","fo","or" ,"normal");
    yabancıDizi=document.getElementById("yabancıDizi").selectedIndex;
    console.log(yabancıDizi)

    if(yabancıDizi==0){
        document.body.style.backgroundColor="black";
        sonucbaslik.innerHTML="Van Helsing dizisi 2016 yapım bir Amerikan korku dizisidir. Oldukça popüler olan yapım vampir dünyasını farklı bir şekilde anlatarak öne çıkıyor. Abraham Van Helsing bir vampir avcısıdır ve vampirlerle savaş halindedir. Kızı Vanessa Van Helsing ise hayatta kalan insanlara yardım etmeye çalışan bir karakterdir.";
        sonucbaslik.classList.add("vh");
        document.getElementById("resim").setAttribute("src" , "vh.jpg");
    }

    else if(yabancıDizi==1){
        document.body.style.backgroundColor="blue";
        sonucbaslik.innerHTML="Dizinin her başlangıcında da “mentalist”, “zekasını kullanarak hipnoz ve telkin uygulayabilen, düşünce ve davranışlara yön veren uzman” olarak açıklanıyor. Dizide de Jane, her fırsatta medyum olmadığını hatta medyumların dolandırıcı olduklarını söylüyor. Jane'in esas amacı Red John'u yakalayıp öldürmek."; 
        sonucbaslik.classList.add("me");
        document.getElementById("resim").setAttribute("src" , "me.jpg");
    }

    else if(yabancıDizi==2){
        document.body.style.backgroundColor="#395B64";
        sonucbaslik.innerHTML="17. yüzyılda Avusturya'nın kırsal kesiminde yaşayan genç bir kadın, bir Rus imparatoru ile evlenir. Fakat bu evlilik genç kadını kendi mutluluğu ve Rusya'nın geleceği arasında bir seçim yapmak zorunda bırakır. Dizide, Rus İmparatoriçesi II. Katerina'nın sansasyonel hayatına odaklanılıyor."; 
        sonucbaslik.classList.add("ge");
        document.getElementById("resim").setAttribute("src" , "ge.jpg");
    }

    else if(yabancıDizi==3){
        document.body.style.backgroundColor="#361500";
        sonucbaslik.innerHTML="Frontier, 18. yüzyılın sonlarında kürk ticareti yapan gruplar arasındaki çatışmaları ve güç savaşlarını anlatıyor."; 
        sonucbaslik.classList.add("fo");
        document.getElementById("resim").setAttribute("src" , "fr.jpg");
    }

    else if(yabancıDizi==4){
        document.body.style.backgroundColor="black";
        sonucbaslik.innerHTML="Seri vampir Klaus Mikaelson kendisi ve ailesi New Orleans'ın doğaüstü politikalarından ötürü karmakarışık durumunu konu alır."; 
        sonucbaslik.classList.add("or");
        document.getElementById("resim").setAttribute("src" , "or.jpg");
    }
    
}

function yerliDizi(){
    sonucbaslik.classList.remove("at" ,"ami", "ig", "ya", "ma" ,"normal");
    yerliDizi=document.getElementById("yerliDizi").selectedIndex;
    console.log(yerliDizi)

    if(yerliDizi==0){
        document.body.style.backgroundColor="black";
        sonucbaslik.innerHTML="Atiye, genç ve güzel bir ressam ve İstanbul'da mükemmel görünüşlü bir hayat sürüyor.İstanbul'dan Göbekli tepe ve Nemrut'a Anadolu üzerinden yolculuk, manevi dünya ile maddi dünya, modern dünya ve antik dünya arasında bir bağlantı oluşturur, bu deneyimi üstlenenlerde içsel bir dönüşümü harekete geçiren bir oluşumdur.";
        sonucbaslik.classList.add("at");
        document.getElementById("resim").setAttribute("src" , "ati.jpg");
    }

    else if(yerliDizi==1){
        document.body.style.backgroundColor="#FFC0D3";
        sonucbaslik.innerHTML="Güney Kore yapımı My Cunning Single Lady dizisinden uyarlanan dizinin konusu ise şöyle: Garsonluk yapan Esra, yaşadığı sıkıntı dolu hayattan artık kurtulmak ister. Bunun için de mühendis olan Ozan ile mantık evliliği yapar. Ancak evliliğinde de maddi ve manevi sıkıntılar yaşayan Esra, Ozan'dan ayrılır.";
        sonucbaslik.classList.add("ami");
        document.getElementById("resim").setAttribute("src" , "ami.jpg");
    }

    else if(yerliDizi==2){
        document.body.style.backgroundColor="black";
        sonucbaslik.innerHTML="3 yakın arkadaş kendi filmlerini çekmeye karar verir,ama hiç paraları yoktur. İşler Güçler, kariyerlerinde farklı noktalardaki üç oyuncunun, birlikte bağımsız bir film çekebilmek için girdikleri kısır döngünün trajikomik hikayesini konu ediyor.";
        sonucbaslik.classList.add("ig");
        document.getElementById("resim").setAttribute("src" , "ig.jpg");
    }

    else if(yerliDizi==3){
        document.body.style.backgroundColor="#362706";
        sonucbaslik.innerHTML=" Bir cinayet vakasıyla yolları kesişen Ilgaz ve Ceylin, katili bulma yolunda birlikte hareket etmek zorunda kalacak ve bu durum ikisinin de hayatında geri dönüşsüz bir kırılma noktası yaratacaktır.";
        sonucbaslik.classList.add("ya");
        document.getElementById("resim").setAttribute("src" , "ya.jpg");
    }

    else if(yerliDizi==4){
        document.body.style.backgroundColor="#1572A1";
        sonucbaslik.innerHTML="fırat bulut, istanbul adliye'sinde görevli bir cumhuriyet savcısıdır. başarılı bir savcı olan fırat, eşi zeynep ve beş yaşındaki kızı nazlı'yla mutlu bir hayat yaşar. ancak bir gün uyandığında son dört ayda olanları hiçbir şekilde hatırlamadan kendisini cezaevinde bulur.";
        sonucbaslik.classList.add("ma");
        document.getElementById("resim").setAttribute("src" , "ma.jpg");
    }


    function yabancıFilm(){
        sonucbaslik.classList.remove("pa" ,"km", "du", "ti", "de" ,"normal");
        yerliDizi=document.getElementById("yabancıFilm").selectedIndex;
        console.log(yerliDizi)

    }
     
    if(yabancıFilm==0){
        document.body.style.backgroundColor="#11468F";
        sonucbaslik.innerHTML="henri charriere isimli bir yazarin yazdigi bir kitap : charles brunier ve rene belbenoit isimli mahkumlardan esinlenerek, lakabi papillo olan bir mahkumun fransız guyane bolgesinde hapis olarak kullanılan yari-adası cayenne'den nasıl kaçtığını anlatan hikaye.";
        sonucbaslik.classList.add("pa");
        document.getElementById("resim").setAttribute("src", "pa.jpg");
    }

    else if(yabancıFilm==1){
        document.body.style.backgroundColor="#EEC373";
        sonucbaslik.innerHTML="Filmde çok yetenekli, ancak işlenmemiş bir sokak gencinin çok gizli bir casusluk organizasyonuna kabul edilmesi ve organizasyonun çok zorlayıcı eğitim aşamalarından geçmesi konu ediliyor. Tam bu sırada sorunlu bir dahinin tüm dünyayı tehdit etmeye başlaması, işin şeklini değiştirecektir.";
        sonucbaslik.classList.add("km");
        document.getElementById("resim").setAttribute("src", "km.jpg");
    }

    else if(yabancıFilm==2){
        document.body.style.backgroundColor="black";
        sonucbaslik.innerHTML="Dune filmi, uzak bir gelecekte geçiyor. Kendi ailesi ve halkının geleceğini garanti altına almak uğruna evrendeki en tehlikeli gezegene seyahat etmek zorunda olan Paul Atreides'in hikayesini anlatıyor. Bu hayatta galaksinin farklı noktalarında bulunan gezegenler, rakip feodal aileler tarafından yönetiliyor.";
        sonucbaslik.classList.add("du");
        document.getElementById("resim").setAttribute("src", "du.jpg");
    }

    else if(yabancıFilm==3){
        document.body.style.backgroundColor="#003366";
        sonucbaslik.innerHTML="Titanic adlı dev gemide yaşanan olayların anlatıldığı film, romantik ve dram türlerinde olup geminin yola çıkılmasından yaklaşık dört buçuk gün sonra dev bir buz dağına çarpması sonucu yaşanan olayları ele alıyor.";
        sonucbaslik.classList.add("ti");
        document.getElementById("resim").setAttribute("src", "ti.jpg");
    }

    else if(yabancıFilm==4){
        document.body.style.backgroundColor="black";
        sonucbaslik.innerHTML="Marvel Comics'in en alışılmadık anti-kahramanı Deadpool, eski bir Özel Kuvvet askeri olan Wade Wilson'un, üzerinde uygulanan zorlu bir deneyin onu hızlandırılmış kendini iyileştirme gücü ve alt egosuyla baş başa bırakmasının hikayesi.";
        sonucbaslik.classList.add("de");
        document.getElementById("resim").setAttribute("src", "de.jpg");
    }


    function yerliFilm(){
        sonucbaslik.classList.remove("hs" ,"aş", "7k", "ats", "kc" ,"normal");
        yerliDizi=document.getElementById("yerliFilm").selectedIndex;
        console.log(yerliDizi)
    }

    if(yerliFilm==0){
        document.body.style.backgroundColor="#000";
        sonucbaslik.innerHTML="Filmin konusu ise Özel Çamlıca Lisesi'ne yeni atanan müdür muavini ve tarih öğretmeni olan Kel Mahmut kopya çeken, okuldan kaçıp maçlara giden, hocalarla sürekli kafa bulan öğrencilerle dolu okuldaki Hababam Sınıfı'na ilginç ceza yöntemleriyle disiplin altına almaya çalışır.";
        sonucbaslik.classList.add("hs");
        document.getElementById("resim").setAttribute("src" , "hs.jpg");
    }

    else if(yerliFilm==1){
        document.body.style.backgroundColor="#000";
        sonucbaslik.innerHTML="Aşk Taktikleri, erkekleri çözdüğüne inanan Aslı ile kadınları anladığını düşünen Kerem'in hikayesini konu ediyor. Aslı, erkekleri çözdüğüne inanan ve adını saklayarak ilişkiler hakkında yazdıklarıyla oldukça popüler olan, bir moda tasarımcısıdır.";
        sonucbaslik.classList.add("aş");
        document.getElementById("resim").setAttribute("src" , "at.jpg");
    }
    else if(yerliFilm==2){
        document.body.style.backgroundColor="#000";
        sonucbaslik.innerHTML="7. Koğuştaki Mucize, 7 yaşındaki kızı ile aynı zeka yaşına sahip bir babanın adalet arayışını konu ediyor. 1983 yılında bir Ege kasabasında küçük bir kız ölür.İdam cezasına çarptırılan Memo'nun yakınları adaletin sağlanması için uğraşırken, Memo ve kızı Ova'nın tek istediği birbirlerine kavuşabilmektir.";
        sonucbaslik.classList.add("7k");
        document.getElementById("resim").setAttribute("src" , "km.gif");
    }
    else if(yerliFilm==3){
        document.body.style.backgroundColor="#000";
        sonucbaslik.innerHTML="Aşk Tesadüfleri Sever filmi; çocuklukları ve gençliklerinde yolları Ankara'da kesişen ve 2010 yılında İstanbul'da tekrar karşılaşan Özgür ve Deniz'in kendilerini engellerle dolu bir aşk macerası içinde buldukları hayatlarına odaklanıyor.";
        sonucbaslik.classList.add("atc");
        document.getElementById("resim").setAttribute("src" , "ats.png");
    }
    else if(yerliFilm==4){
        document.body.style.backgroundColor="#000";
        sonucbaslik.innerHTML="5 bin nüfuslu bir beldenin ülkeye dönüşüp Amerika'yla savaşa girmesini konu alan Kolonya Cumhuriyeti filmi 2017'de vizyona girmişti. Başrollerini Çağlar Çorumlu ve Büşra Pekin'in paylaştığı filmin oyuncu kadrosunda komedinin renkli isimleri Mahir İpek, Uğur Bilgin ve Ersin Korkut da yer alıyor.";
        sonucbaslik.classList.add("kc");
        document.getElementById("resim").setAttribute("src" , "kc.jpg");
    }
}

function kaydet(){
    let ad, soyad, yas;
    ad=document.getElementById("txtAd").value;
    soyad=document.getElementById("txtSoyad").value;
    yas=document.getElementById("numberYas").value;
    console.log(ad);
    console.log(soyad);
    console.log(yas);

    /*
    sonucbaslik=document.getElementById("sonucbaslik");

    if (yas<16){
        sonucbaslik.innerHTML="Sitemize 16 yaşından küçükler giremez.";
    }

    else{
        sonucbaslik.innerHTML="Sitemize Hoşgeldiniz";
    }
    */
}
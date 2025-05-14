function predict() {
  const text = document.getElementById("newsInput").value.trim();
  const resultDiv = document.getElementById("result");

  if (!text) {
    resultDiv.textContent = "Iltimos, matn kiriting.";
    resultDiv.style.color = "red";
    return;
  }

  const fakeKeywords = [
    "Bugun Toshkentda qor yogadi",
    "Samolyot reysi toxtatildi",
    "Prezident iste'foga chiqdi",
    "Ozbekiston AQSH bilan urush boshladi",
    "Erta tongda yer silkinadi",
    "Makro marketlar tarmogi yopildi",
    "Toshkent metrosi abadiy toxtaydi",
    "Maktablar bir yilga yopiladi",
    "Dollar kursi 1000 somga tushdi",
    "Benzin narxi 2000 somga arzonlashdi",
    "Hamma imtihonlar bekor qilindi",
    "Yangi iPhone 500 ming somda sotuvda",
    "Telegram butunlay bloklanadi",
    "Bugun barcha internet ochiriladi",
    "Quyosh tongda chiqmaydi",
    "Dunyo oxiri yaqinlashmoqda",
    "Toshkent dengizi qurib ketdi",
    "Toshkentda yangi vulqon paydo boldi",
    "Namanganda ayiqlar hujum qildi",
    "Andijonda dinosaur korildi",
    "Milliy universitetda oquvchilar goyib boldi",
    "Makro chipta bilan kiriladigan boldi",
    "Fargonada muz yogdi",
    "Navoiyda soya odamlar korindi",
    "Toshkentda YTH 100 ta mashinani urdi",
    "Viloyat hokimi iste'foga chiqdi",
    "Yangi prezident saylandi",
    "Har bir fuqaro davlatdan 5 mln oladi",
    "Naqd pul butunlay bekor qilinadi",
    "Ijtimoiy tarmoqlar bir oy ishlamaydi",
    "Hamma kasblar suniy intellektga topshiriladi",
    "Poliklinikalar bepul davolaydi",
    "Pensiyalar 10 barobarga oshadi",
    "Barcha soliq bekor qilindi",
    "Yangi yil bu yil otkazilmaydi",
    "Jahon chempionati Ozbekistonda otkaziladi",
    "Har bir talaba avtomobil oladi",
    "Darslar 12 oy davom etadi",
    "Tibbiyot xodimlari yiliga 3 oy tatilga chiqadi",
    "Har bir oquvchiga planshet tarqatiladi",
    "Avtobuslar bepul boladi",
    "Maktablarga robot oqituvchilar keladi",
    "Ob-havo +50°C boladi",
    "Yangi kasallik paydo boldi",
    "Talabalar uydan chiqmasdan diplom oladi",
    "Elektr energiyasi butunlay uziladi",
    "Ishchilar bir oy tatilga chiqarildi",
    "Har bir oilaga bepul uy beriladi",
    "Saylov natijalari bekor qilindi",
    "Toshkent aeroporti 1 yilga yopiladi",
  ];

  const realKeywords = [
    "Bugun Toshkentda havo biroz iliq boladi",
    "Samolyot reysi soat 14:00 da uchadi",
    "Prezident yangi qarorni imzoladi",
    "Ozbekiston va Qozogiston hamkorlik bitimini imzoladi",
    "Andijonda yer silkinishi qayd etilmadi",
    "Makro supermarket yangi filialini ochdi",
    "Toshkent metrosi yangi yonalishni ishga tushirdi",
    "Maktablarda bahorgi tatil boshlandi",
    "Dollar kursi 12600 som atrofida",
    "Benzin narxi biroz oshdi",
    "Imtihonlar jadvalga muvofiq otkaziladi",
    "Yangi iPhone rasmiy dilerlarda sotuvda",
    "Telegram ishlashda davom etmoqda",
    "Internet xizmatlarida uzilish kuzatilmadi",
    "Quyoshli ob-havo kutilmoqda",
    "Ozbekiston 2025-yil uchun rejalarni e'lon qildi",
    "Toshkent suv omborida suv sathi normal darajada",
    "FVV bugun favqulodda holat qayd etilmaganini bildirdi",
    "Samarqandda ob-havo quyoshli boladi",
    "Andijonda xalqaro forum bolib otmoqda",
    "Talabalar uchun yangi grantlar ochildi",
    "Namanganda avtomobil korgazmasi boshlandi",
    "Ozbekistonda yangi elektromobil ishlab chiqarilmoqda",
    "Toshkentda tibbiyot anjumani otkazildi",
    "Yangi stadion foydalanishga topshirildi",
    "Viloyat hokimi hududlarni kozdan kechirdi",
    "Ijtimoiy yordam puli oz vaqtida tolanmoqda",
    "Hokimiyat ijtimoiy loyihalarni boshladi",
    "Tibbiyot sohasiga qoshimcha mablag ajratildi",
    "Oqituvchilar malaka oshirish kursiga qatnashmoqda",
    "Yozgi oromgohlar uchun tayyorgarlik boshlandi",
    "Transport tizimi yangilanishi rejalashtirilmoqda",
    "Pensiya kartalarga otkazildi",
    "Talabalarga stipendiya tolandi",
    "Bozorlar faoliyatini davom ettirmoqda",
    "Tolov tizimlari yangilanmoqda",
    "Ozbekiston ilm-fan sohasida muvaffaqiyatlarga erishmoqda",
    "Yangi kasalxona ochildi",
    "Qurilish ishlari jadallik bilan olib borilmoqda",
    "Davlat test markazi imtihon vaqtini elon qildi",
    "Namanganda kokalamzorlashtirish ishlari boshlandi",
    "Bogchalarda gigiyena nazorati kuchaytirildi",
    "Farmatsevtika kompaniyalari yangi dorilar ishlab chiqmoqda",
    "Toshkent aeroporti muntazam faoliyat yuritmoqda",
    "Obodonlashtirish ishlari davom etmoqda",
    "Aholi royxatga olish ishlari yakunlanmoqda",
    "Yoshlar festivali otkazilishi rejalashtirilgan",
    "Mahallalarda tibbiy koriklar otkazilmoqda",
    "Fargonada suv taminoti yaxshilandi",
    "Soliq tizimida yangi yondashuvlar joriy etildi",
  ];

  const lowerText = text.toLowerCase();
  let isFake = false;
  let isReal = false;

  fakeKeywords.forEach((word) => {
    if (lowerText.includes(word.toLowerCase())) {
      isFake = true;
    }
  });

  realKeywords.forEach((word) => {
    if (lowerText.includes(word.toLowerCase())) {
      isReal = true;
    }
  });

  if (isFake) {
    resultDiv.textContent = "🚨 Bu yangilik YOLG‘ON bo‘lishi mumkin!";
    resultDiv.style.color = "red";
  } else if (isReal) {
    resultDiv.textContent = "✅ Bu yangilik ROSTGA O‘XSHAYDI!";
    resultDiv.style.color = "green";
  } else {
    resultDiv.textContent =
      "ℹ️ Bu yangilik noma'lum. Iltimos tekshirib ko‘ring.";
    resultDiv.style.color = "orange";
  }
}

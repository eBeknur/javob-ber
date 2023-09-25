const Savollar = [
  {
    savol: "EASY 9 X 3 = ?",
    variant: [
      alert(" Ozingizga ishonch xosil qilgan bolsangiz davom ettiring"),
      "A. 24",
      "B. 27",
      "C. 30",
      "D. 33",
    ],
    javobi: "B",
  },
  {
    savol: "Uzoq umr koradigan personaj?",
    variant: ["A. Olmas kashshey", "B. Siz", "C. Dostingiz", "D. Xokim"],
    javobi: "A",
  },
  {
    savol: "# Paxlavonning eng kichigi?",
    variant: [
      "A. Илья Муромец",
      "B. Добрыня Никитич",
      "C.Попович ",
      "D. Hudo biladi qaysi",
    ],
    javobi: "A",
  },
  {
    savol: "Ford kim?",
    variant: ["A. Ixtirochi", "B. Koleksioner", "C. Chempion", "D. Prezident"],
    javobi: "B",
  },
  {
    savol: "2X2 = ?",
    variant: ["A. 5", "B. besh", "C. 4", "D. tort"],
    javobi: "D",
  },
  {
    savol: "ikki nol ikki nol",
    variant: ["A.2020 ", "B.0022 ", "C.2200 ", "D. 0202"],
    javobi: "D",
  },
  {
    savol: "Birinchi mesenjer?",
    variant: ["A. Telegram", "B. Plus", "C. VPN-TG", "D. ALPHA-GRAM"],
    javobi: "A",
  },
  {
    savol: "1970 YIL 1 YANVAR QANAQA KUN",
    variant: [
      "A. DAVR VAQTI",
      "B. QONLI OY KORINGAN",
      "C.SANOQ SISTEMASI YARATILGAN ",
      "D. MEN TUG'ILGANMAN",
    ],
    javobi: "A",
  },
  {
    savol: "?",
    variant: ["A. 45", "B. 49", "C. 42", "D. 35"],
    javobi: "",
  },
  {
    savol: "4X3?",
    variant: ["A. 56", "B.12", "C. 42", "D. 35"],
    javobi: "B",
  },
];

let togriJavoblar = 0;

for (let i = 0; i < Savollar.length; i++) {
  const userJavobi = prompt(
    Savollar[i].savol + "\nVariant: " + Savollar[i].variant.join("\n")
  );

  if (userJavobi === "quit" || userJavobi === "exit") {
    break;
  }
  if (userJavobi === "next") {
    continue;
  }
  if (userJavobi === Savollar[i].javobi) {
    togriJavoblar++;
  }

  if (userJavobi === "next") {
    continue;
  } else if (userJavobi === "" || userJavobi === null) {
    alert(
      "Siz variant belgilamadingiz :: agar bilmasangiz belgilamaslik  kerak emas degani emas"
    );
  }
}

alert(
  "Siz " +
    Savollar.length +
    " ta savoldan " +
    togriJavoblar +
    " ta to'gri bajardingiz."
);

if (togriJavoblar >= Savollar.length - 3) {
  alert("Maybe!  Siz byudjetga kirdingiz");
} else if (
  togriJavoblar === Savollar.length - 5 ||
  togriJavoblar < Savollar.length - 3
) {
  alert(
    " Congratulations! Siz to'lov kontrakt asosida o'qishga qabul qilindingiz."
  );
} else {
  alert(
    "Keyingi yil urinib koring : bilim darajangizni past degani emas sal past"
  );
}

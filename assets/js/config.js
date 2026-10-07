/* =====================================================================
   WEDDING SITE — CONTENT CONFIG  (Ngọc Đức ❤ Mỹ Hạnh · 25.10.2026)
   ---------------------------------------------------------------------
   Đây là nơi DUY NHẤT bạn cần sửa nội dung. / This is the ONLY file you
   need to edit to change wording, photos, dates, bank info, music...
   Mỗi câu chữ có 2 ngôn ngữ: { vi: "Tiếng Việt", en: "English" }
   ===================================================================== */

const CONFIG = {

  /* ---- Cặp đôi / The couple ---------------------------------------- */
  couple: {
    doubleHappiness: "囍",
    // Giờ cưới chính thức : 11:00, 25/10/2026 (GMT+7)
    weddingDateTime: "2026-10-25T11:00:00+07:00",
    // Sau mốc này: ẩn đồng hồ, hiện lời nhắn "đã về chung một nhà" — 23:00, 25/10/2026 (GMT+7)
    countdownEndDateTime: "2026-10-25T23:00:00+07:00",
    displayDate: "25 . 10 . 2026",

    groom: {
      name:     { vi: "Ngọc Đức", en: "Ngoc Duc" },
      fullName: { vi: "Lê Ngọc Đức", en: "Le Ngoc Duc" },
      role:     { vi: "Chú rể", en: "The Groom" },
      father:   "Lê Quang Bút",
      mother:   "Phạm Thị Hằng",
      hometown: { vi: "X. Phong Doanh – T. Ninh Bình", en: "Phong Doanh, Ninh Binh" },
    },
    bride: {
      name:     { vi: "Mỹ Hạnh", en: "My Hanh" },
      fullName: { vi: "Đinh Thị Mỹ Hạnh", en: "Dinh Thi My Hanh" },
      role:     { vi: "Trưởng Nữ", en: "The Bride" },
      father:   "Đinh Duy Hạ",
      mother:   "Đinh Thị Nương",
      hometown: { vi: "X. Vũ Dương – T. Ninh Bình", en: "Vu Duong, Ninh Binh" },
    },
  },

  /* ---- Ảnh nền trang bìa (chạy slideshow) / Hero background slides -- */
  heroImages: [
    "assets/images/prewedding/pre-16.jpg",
    "assets/images/prewedding/pre-13.jpg",
    "assets/images/prewedding/pre-02.jpg",
    "assets/images/prewedding/pre-03.jpg",
  ],

  /* ---- Câu chuyện tình yêu (dòng thời gian) / Love story timeline ---
     👉 Sửa 'date', 'title', 'text' cho đúng câu chuyện của bạn.
        Ảnh nằm trong assets/images/love/ và prewedding/            */
  story: [
    
  ],

  
  /* ---- Album ảnh cưới / Pre-wedding gallery ------------------------- */
  gallery: {
    heading: { vi: "Khoảnh khắc của chúng mình", en: "Our moments" },
    images: [
      "assets/images/moments/moment-01.jpg",
      "assets/images/moments/moment-02.jpg",
      "assets/images/moments/moment-03.jpg",
      "assets/images/moments/moment-04.jpg",
      "assets/images/moments/moment-05.jpg", 
      "assets/images/propose/propose-01.jpg", 
      "assets/images/propose/propose-02.jpg", 
      "assets/images/propose/propose-03.jpg", 
      "assets/images/propose/propose-04.jpg",
      "assets/images/prewedding/pre-01.jpg", 
      "assets/images/prewedding/pre-02.jpg", 
      "assets/images/prewedding/pre-03.jpg", 
      "assets/images/prewedding/pre-04.jpg", 
      "assets/images/prewedding/pre-05.jpg", 
      "assets/images/prewedding/pre-06.jpg", 
      "assets/images/prewedding/pre-07.jpg", 
      "assets/images/prewedding/pre-08.jpg", 
      "assets/images/prewedding/pre-09.jpg", 
      "assets/images/prewedding/pre-10.jpg",
      "assets/images/prewedding/pre-11.jpg",
      "assets/images/prewedding/pre-12.jpg",
      "assets/images/prewedding/pre-13.jpg",
      "assets/images/prewedding/pre-14.jpg",
      "assets/images/prewedding/pre-15.jpg",
      "assets/images/prewedding/pre-16.jpg",
      "assets/images/prewedding/pre-17.jpg",
      "assets/images/prewedding/pre-18.jpg",
      "assets/images/prewedding/pre-19.jpg",
      "assets/images/prewedding/pre-20.jpg"],
  },

  /* ---- Chi tiết lễ cưới / Ceremony details -------------------------- */
  ceremony: {
    invite: { vi: "Trân trọng kính mời", en: "Cordially invites" },
    vuQuy: {
      label:    { vi: "Lễ Vu Quy", en: "Vu Quy Ceremony" },
      time:     { vi: "09:30 · Chủ Nhật, 25.10.2026", en: "09:30 · Sun, Oct 25, 2026" },
      lunar:    { vi: "(Nhằm ngày 16 tháng 09 năm Bính Ngọ)", en: "(16th day, 9th lunar month, Year of the Horse)" },
      place:    { vi: "Tư gia nhà gái", en: "At the bride's family home" },
    },
    reception: {
      label:    { vi: "Lễ Thành Hôn", en: "Wedding Reception" },
      time:     { vi: "11:00 · Chủ Nhật, 25.10.2026", en: "11:00 · Sun, Oct 25, 2026" },
      lunar:    { vi: "(Nhằm ngày 16 tháng 09 năm Bính Ngọ)", en: "(16th day, 9th lunar month, Year of the Horse)" },
      place:    { vi: "Tư gia nhà trai", en: "At the groom's family home" },
    },
    schedule: [
      { icon: "🚪", label: { vi: "Đón khách", en: "Welcome" },   time: "7:00" },      
      { icon: "🍽️", label: { vi: "Khai tiệc", en: "Dinner" },    time: "7:30" },
      { icon: "💍", label: { vi: "Đi đón dâu",   en: "Going to fetch the bride" },  time: "9:05" },
    ],
    closing: { vi: "Sự hiện diện của quý khách là niềm vinh hạnh cho gia đình chúng tôi.",
               en: "Your presence is the greatest honour to our families." },
  },

  /* ---- Bản đồ & QR / Map & QR --------------------------------------- */
  location: {
    // ==================== NHÀ TRAI ====================
    groom: {
      heading: { vi: "Chỉ đường đến nhà trai", en: "Directions to the groom's house" },
      // Nhúng bản đồ (không cần API key)
      mapEmbed: "https://www.google.com/maps?q=20.3524921,105.9610450&output=embed",
      mapLink:  "https://maps.app.goo.gl/pMPbgpxQofynKTZM6?g_st=ic",
      qrImage:  "assets/images/qr-map-groom.png",
      qrCaption:{ vi: "Quét mã để mở Google Maps đến nhà trai", en: "Scan to open Google Maps to the groom's house" }
    },
    
    // ==================== NHÀ GÁI ====================  
    bride: {
      heading: { vi: "Chỉ đường đến nhà gái", en: "Directions to the bride's house" },
      // Nhúng bản đồ (không cần API key)
      mapEmbed: "https://www.google.com/maps?q=20.3496563,106.0073775&output=embed",
      mapLink: "https://maps.app.goo.gl/YXDrwp2h74BfGpbZ9?g_st=ic",
      qrImage: "assets/images/qr-map-bride.png",
      qrCaption: { vi: "Quét mã để mở Google Maps đến nhà gái", en: "Scan to open Google Maps to the bride's house" }
    },
  },

  /* ---- Mừng cưới / Gift (VietQR tự sinh) ----------------------------
     👉 QR được tạo tự động từ bankBin + account (không cần ảnh).
        Nội dung CK: <Danh xưng>-<Tên khách>-<addInfoSuffix theo bên>   */
  gift: {
    heading: { vi: "Gửi trao lời chúc", en: "Send your blessing" },
    note: { vi: "Sự hiện diện của bạn đã là món quà quý giá. Nhưng nếu không thể góp mặt bạn có thể chung vui online với mã QR.",
            en: "Your presence is a precious gift. But if you can't be there, you can celebrate online using the QR code." },
    // Nội dung chuyển khoản: <Danh xưng>-<Tên khách>-<suffix theo bên>
    groom: {
      label:    { vi: "Nhà Trai", en: "Groom's Side" },
      holder:   "LE NGOC DUC",
      account:  "0968659699",
      bankName: "VPB",
      bankBin:  "970432",
      addInfoSuffix: "MungCuoiNgocDucMyHanh",
    },
    bride: {
      label:    { vi: "Nhà Gái", en: "Bride's Side" },
      holder:   "DINH THI MY HANH",
      account:  "1056699508",
      bankName: "Vietcombank",
      bankBin:  "970436",
      addInfoSuffix: "MungCuoiMyHanhNgocDuc",
    },
  },

  /* ---- Nhạc nền / Background music ----------------------------------
     Đặt file nhạc của bạn tại assets/music/background.mp3
     Nếu chưa có, site sẽ tự dùng nhạc mẫu online bên dưới.        */
  music: {
    src: "assets/music/background.mp3",
    fallback: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    title: { vi: "Nhạc nền", en: "Music" },
  },
};

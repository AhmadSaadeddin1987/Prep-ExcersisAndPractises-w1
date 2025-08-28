// دالة رئيسية فيها عملية غير متزامنة (مثلاً جلب بيانات من API)
function fetchData(callback) {
    console.log("⏳ جاري تحميل البيانات...");

    setTimeout(function() {
    let data = { id: 1, name: "Ahmad" }; // البيانات اللي "رجعت" بعد وقت
    callback(data); // نستدعي الـ callback ونمرر البيانات له
  }, 10000); // تأخير 2 ثانية كأننا ننتظر السيرفر
}

// دالة callback لمعالجة البيانات
function handleData(data) {
    console.log("✅ تم استلام البيانات:");
    console.log(data);
    }

// استدعاء الدالة الرئيسية مع تمرير الـ callback
fetchData(handleData);
let body = $response.body;
let obj = JSON.parse(body);

// فتح الميزات المدفوعة
obj.data.isPremium = true;
obj.data.subscriptionStatus = "active";

body = JSON.stringify(obj);
$done({body});
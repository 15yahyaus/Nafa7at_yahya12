// رقمك (بدون 0)
const phoneNumber = "212694604606"; // بدل برقمك

// المنتجات
const products = [
  {
    name: "📘 ملف الرياضيات",
    price: "10 دراهم",
    image: "pdfs/pdf1.jpg"
  },
  {
    name: "📗 ملف الفيزياء",
    price: "15 درهم",
    image: "pdfs/pdf11.jpg"
  },
{
  name: "📕 الأربعون النووية مع الشرح",
  price: "20 درهم",
  image: "pdfs/pdf111.jpg",
  description: "📖 متن الأربعين النووية مع شرح مبسط وسهل الفهم للمبتدئين"
}
];

// عرض المنتجات
const container = document.getElementById("products");

products.forEach(product => {
  container.innerHTML += `
    <div class="col-md-4 mb-4">
      <div class="card p-3 text-center">
        <img src="${product.image}" class="img-fluid mb-3" style="height:200px; object-fit:cover;">
        <h5>${product.name}</h5>
        <p class="text-success">${product.price}</p>
        <button class="btn btn-success" onclick="orderProduct('${product.name}')">
          اطلب الآن عبر واتساب
        </button>
      </div>
    </div>
  `;
});

// دالة واتساب
function orderProduct(productName) {
  let message = `السلام عليكم، أريد شراء ${productName}`;
  let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
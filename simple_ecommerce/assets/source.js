document.getElementById("year").innerHTML = new Date().getFullYear();
function buy(product_name, product_price){
    const message = `Halo saya mau beli ${product_name} - ${product_price}`
    const whatsapp = `https://wa.me/6287884227127?text=${message}`
    open(whatsapp, "_blank")
    
}
function chat() {
    alert('halo min saya mau tanya nih...');
}
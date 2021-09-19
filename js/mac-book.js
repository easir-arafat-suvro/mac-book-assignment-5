function updatePrice(id, price) {
    document.getElementById('price-best').innerText;
    if (id == 'memory') {
        /* update memory-cost - done*/
        const memoryElement = document.getElementById('memory-cost');
        memoryCost = memoryElement.innerText = price;
    }
    else if (id == 'storage') {
        /* update storage-cost */
        const storageElement = document.getElementById('storage-cost');
        storageElement.innerText = price;
    }
    else if (id == 'delivery') {
        const deliveryElement = document.getElementById('delivery-cost');
        deliveryElement.innerText = price;
    }

    /* update total-price */
    const totalPrice = document.getElementById('total-price').innerText = parseInt(document.getElementById('price-best').innerText) + parseInt(document.getElementById('memory-cost').innerText) + parseInt(document.getElementById('storage-cost').innerText) + parseInt(document.getElementById('delivery-cost').innerText);

    /* update total */
    const totalCost = document.getElementById('total').innerText = totalPrice;

    /* Promo Code */
    document.getElementById('code').addEventListener('click', function () {
        if (document.getElementById('input-field').value == 'stevekaku') {
            document.getElementById('total').innerText = Math.round(parseInt(document.getElementById('total').innerText) * .8);
            document.getElementById('input-field').value = '';
        }
    })
}



/* Memory Configaration */
document.getElementById('btn-memory8gb').addEventListener('click', function () {
    updatePrice('memory', 0)
})
document.getElementById('btn-memory16gb').addEventListener('click', function () {
    updatePrice('memory', 180)
})
/* Storage Configaration */
document.getElementById('btn-storage256gb').addEventListener('click', function () {
    updatePrice('storage', 0)
})
document.getElementById('btn-storage512gb').addEventListener('click', function () {
    updatePrice('storage', 100)
})
document.getElementById('btn-storage1tb').addEventListener('click', function () {
    updatePrice('storage', 180)
})
/* Delivery Charge */
document.getElementById('btn-deliveryFree').addEventListener('click', function () {
    updatePrice('delivery', 0)
})
document.getElementById('btn-deliveryPaid').addEventListener('click', function () {
    updatePrice('delivery', 20)
})

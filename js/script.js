// ========================================
// カート機能
// ========================================

let cart = [];

// ローカルストレージからカートデータを読み込み
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

// カートをローカルストレージに保存
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// カート数を更新
function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    // ここでカートアイコンの数字を更新する（将来的に実装）
    console.log('カート内商品数:', cartCount);
}

// 商品をカートに追加
function addToCart(productName, productPrice) {
    const existingItem = cart.find(item => item.name === productName);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: productName,
            price: productPrice,
            quantity: 1
        });
    }

    saveCart();
    showNotification(`${productName} をカートに追加しました`);
}

// 通知を表示
function showNotification(message) {
    // 既存の通知を削除
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // 新しい通知を作成
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: #000;
        color: #fff;
        padding: 1rem 1.5rem;
        border-radius: 4px;
        font-size: 0.875rem;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(notification);

    // 3秒後に削除
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ========================================
// スムーズスクロール
// ========================================

function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 100;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// カートボタンのイベントリスナー設定
// ========================================

function setupCartButtons() {
    const addToCartButtons = document.querySelectorAll('.btn-add-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            const productItem = this.closest('.product-item');
            const productName = productItem.querySelector('h3').textContent;
            const priceElement = productItem.querySelector('.sale-price') ||
                                productItem.querySelector('.product-price');

            // 価格から数字のみを抽出
            let priceText = priceElement.textContent;
            if (productItem.querySelector('.sale-price')) {
                priceText = productItem.querySelector('.sale-price').textContent;
            }
            const productPrice = parseInt(priceText.replace(/[^0-9]/g, ''));

            addToCart(productName, productPrice);

            // ボタンにアニメーション効果
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
}

// ========================================
// スクロールアニメーション
// ========================================

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 商品アイテムにアニメーションを適用
    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });

    // カテゴリーアイテムにアニメーションを適用
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });
}

// ========================================
// ヘッダースクロール効果
// ========================================

function setupHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });
}

// ========================================
// ニュースレター登録
// ========================================

function setupNewsletter() {
    const newsletterForm = document.querySelector('.newsletter-form');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;

            if (email) {
                showNotification('メールマガジンの登録ありがとうございます！');
                emailInput.value = '';
            }
        });
    }
}

// ========================================
// アニメーションスタイルを追加
// ========================================

function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// ========================================
// 初期化
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    smoothScroll();
    setupCartButtons();
    setupScrollAnimations();
    setupHeaderScroll();
    setupNewsletter();
    addAnimationStyles();

    console.log('MENS FASHION サイトが読み込まれました');
});

// ========================================
// エクスポート（必要に応じて）
// ========================================

window.MensFashion = {
    addToCart,
    cart,
    loadCart,
    saveCart
};

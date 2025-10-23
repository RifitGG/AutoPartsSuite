// Расширенные данные о товарах
        const products = [
            {
                id: 1,
                name: "Тормозные колодки",
                price: 4500,
                category: "brakes",
                brand: "toyota",
                image: "https://images.unsplash.com/photo-1552519507-88aa2dfa9fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
                description: "Высококачественные тормозные колодки для надежного торможения. Совместимы с Toyota Camry, Corolla, RAV4. Изготовлены из современных композитных материалов, обеспечивающих отличное торможение и долгий срок службы.",
                features: ["Совместимость: Toyota Camry, Corolla, RAV4", "Материал: композитный", "Гарантия: 2 года", "Срок службы: 60 000 км"],
                inStock: true,
                rating: 4.8
            },
            {
                id: 2,
                name: "Масляный фильтр",
                price: 1200,
                category: "engine",
                brand: "bmw",
                image: "https://images.unsplash.com/photo-1603712610494-93e15435c272?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
                description: "Эффективная фильтрация масла для защиты двигателя. Подходит для BMW 3, 5, 7 серии. Обеспечивает оптимальную очистку моторного масла от загрязнений, продлевая срок службы двигателя.",
                features: ["Совместимость: BMW 3, 5, 7 серии", "Тип: полнопоточный", "Гарантия: 1 год", "Рекомендуемая замена: каждые 15 000 км"],
                inStock: true,
                rating: 4.5
            },
            {
                id: 3,
                name: "Амортизатор",
                price: 6500,
                category: "suspension",
                brand: "audi",
                image: "https://images.unsplash.com/photo-1590556765877-4cb4c4b58b3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
                description: "Обеспечивает плавность хода и устойчивость на дороге. Для Audi A4, A6, Q5. Газонаполненный амортизатор с прогрессивной характеристикой обеспечивает комфорт при движении и стабильность в поворотах.",
                features: ["Совместимость: Audi A4, A6, Q5", "Тип: газонаполненный", "Гарантия: 3 года", "Установка: профессиональная"],
                inStock: true,
                rating: 4.7
            },
            {
                id: 4,
                name: "Свечи зажигания",
                price: 2500,
                category: "engine",
                brand: "volkswagen",
                image: "https://images.unsplash.com/photo-1610632380340-965eafff4b0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
                description: "Надежное зажигание для оптимальной работы двигателя. Совместимы с Volkswagen Golf, Passat, Tiguan. Иридиевые свечи зажигания обеспечивают стабильную искру и улучшают эффективность сгорания топлива.",
                features: ["Совместимость: Volkswagen Golf, Passat, Tiguan", "Тип: иридиевые", "Гарантия: 2 года", "Ресурс: 60 000 км"],
                inStock: true,
                rating: 4.6
            },
            {
                id: 5,
                name: "Тормозной диск",
                price: 7200,
                category: "brakes",
                brand: "toyota",
                image: "https://images.unsplash.com/photo-1603712610494-93e15435c272?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
                description: "Высококачественные тормозные диски для эффективного торможения. Для Toyota Camry, Corolla, RAV4. Вентилируемые диски из высокопрочного чугуна с антикоррозийным покрытием.",
                features: ["Совместимость: Toyota Camry, Corolla, RAV4", "Тип: вентилируемый", "Материал: чугун", "Гарантия: 2 года"],
                inStock: true,
                rating: 4.9
            },
            {
                id: 6,
                name: "Ремень ГРМ",
                price: 3800,
                category: "engine",
                brand: "bmw",
                image: "https://images.unsplash.com/photo-1552519507-88aa2dfa9fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
                description: "Надежный ремень ГРМ для синхронизации работы двигателя. Для BMW 3, 5, 7 серии. Изготовлен из высокопрочной резины с кордованным усилением, обеспечивает точную синхронизацию валов двигателя.",
                features: ["Совместимость: BMW 3, 5, 7 серии", "Материал: резина с кордом", "Гарантия: 2 года", "Ресурс: 90 000 км"],
                inStock: true,
                rating: 4.4
            },
            {
                id: 7,
                name: "Аккумулятор",
                price: 8900,
                category: "electrics",
                brand: "audi",
                image: "https://images.unsplash.com/photo-1603712610494-93e15435c272?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
                description: "Мощный аккумулятор для бесперебойной работы электросистем. Для Audi A4, A6, Q5. Необслуживаемый аккумулятор с технологией AGM, обеспечивающей надежный запуск в любых условиях.",
                features: ["Совместимость: Audi A4, A6, Q5", "Технология: AGM", "Емкость: 70 А·ч", "Гарантия: 3 года"],
                inStock: true,
                rating: 4.7
            },
            {
                id: 8,
                name: "Стойка стабилизатора",
                price: 2100,
                category: "suspension",
                brand: "volkswagen",
                image: "https://images.unsplash.com/photo-1590556765877-4cb4c4b58b3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
                description: "Обеспечивает устойчивость и управляемость автомобиля. Для Volkswagen Golf, Passat, Tiguan. С шаровыми шарнирами для точной работы и долговечности.",
                features: ["Совместимость: Volkswagen Golf, Passat, Tiguan", "Тип: с шаровыми шарнирами", "Гарантия: 1 год", "Ресурс: 50 000 км"],
                inStock: true,
                rating: 4.3
            },
            {
                id: 9,
                name: "Воздушный фильтр",
                price: 1500,
                category: "engine",
                brand: "ford",
                image: "https://images.unsplash.com/photo-1552519507-88aa2dfa9fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
                description: "Обеспечивает чистоту воздуха для двигателя. Для Ford Focus, Fiesta, Mondeo. Многослойный фильтрующий элемент задерживает до 99,8% вредных частиц и пыли.",
                features: ["Совместимость: Ford Focus, Fiesta, Mondeo", "Тип: бумажный многослойный", "Эффективность: 99,8%", "Гарантия: 1 год"],
                inStock: true,
                rating: 4.2
            },
            {
                id: 10,
                name: "Сцепление",
                price: 12500,
                category: "transmission",
                brand: "mercedes",
                image: "https://images.unsplash.com/photo-1603712610494-93e15435c272?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
                description: "Комплект сцепления для плавного переключения передач. Для Mercedes C-Class, E-Class. Включает диск сцепления, выжимной подшипник и корзину сцепления.",
                features: ["Совместимость: Mercedes C-Class, E-Class", "Комплект: диск, корзина, подшипник", "Гарантия: 2 года", "Ресурс: 100 000 км"],
                inStock: true,
                rating: 4.8
            },
            {
                id: 11,
                name: "Фара головного света",
                price: 8400,
                category: "body",
                brand: "honda",
                image: "https://images.unsplash.com/photo-1552519507-88aa2dfa9fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
                description: "Левая фара головного света с LED технологией. Для Honda Civic, CR-V. Обеспечивает яркое и равномерное освещение дороги, соответствует всем стандартам безопасности.",
                features: ["Совместимость: Honda Civic, CR-V", "Технология: LED", "Цвет: прозрачный", "Гарантия: 2 года"],
                inStock: true,
                rating: 4.6
            },
            {
                id: 12,
                name: "Генератор",
                price: 15600,
                category: "electrics",
                brand: "nissan",
                image: "https://images.unsplash.com/photo-1603712610494-93e15435c272?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
                description: "Надежный генератор для стабильного питания электросистемы. Для Nissan Qashqai, X-Trail, Micra. Обеспечивает стабильное напряжение даже при больших нагрузках.",
                features: ["Совместимость: Nissan Qashqai, X-Trail, Micra", "Мощность: 120 А", "Гарантия: 2 года", "Установка: профессиональная"],
                inStock: true,
                rating: 4.7
            }
        ];

        // Элементы DOM
        const productsGrid = document.getElementById('productsGrid');
        const featuredProducts = document.getElementById('featuredProducts');
        const cartIcon = document.getElementById('cartIcon');
        const cartCount = document.getElementById('cartCount');
        const cartModal = document.getElementById('cartModal');
        const closeCart = document.getElementById('closeCart');
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');
        const checkoutBtn = document.getElementById('checkoutBtn');
        const categoryFilter = document.getElementById('category');
        const brandFilter = document.getElementById('brand');
        const priceFilter = document.getElementById('price');
        const minPriceInput = document.getElementById('minPrice');
        const maxPriceInput = document.getElementById('maxPrice');
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('.section');
        const catalogBtn = document.getElementById('catalogBtn');
        const contactForm = document.getElementById('contactForm');
        const itemsCount = document.getElementById('itemsCount');
        const subtotal = document.getElementById('subtotal');
        const discount = document.getElementById('discount');
        const shipping = document.getElementById('shipping');
        const promoCode = document.getElementById('promoCode');
        const applyPromo = document.getElementById('applyPromo');
        const userIcon = document.getElementById('userIcon');
        const userText = document.getElementById('userText');
        const userDropdown = document.getElementById('userDropdown');
        const profileLink = document.getElementById('profileLink');
        const logoutLink = document.getElementById('logoutLink');
        const dropdownLinks = document.querySelectorAll('.dropdown-link');
        const authTabs = document.querySelectorAll('.auth-tab');
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        const productDetail = document.getElementById('productDetail');
        const relatedProducts = document.getElementById('relatedProducts');
        const profileHeader = document.getElementById('profileHeader');
        const userName = document.getElementById('userName');
        const userEmail = document.getElementById('userEmail');
        const ordersHistory = document.getElementById('ordersHistory');

        // Корзина
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let appliedPromo = null;
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let users = JSON.parse(localStorage.getItem('users')) || [];
        let currentProduct = null;

        // Инициализация страницы
        function init() {
            displayProducts(products);
            displayFeaturedProducts();
            updateCart();
            updateUserUI();
            setupEventListeners();
            
            // Установка начального значения для фильтра цены
            priceFilter.value = 50000;
            minPriceInput.value = 0;
            maxPriceInput.value = 50000;
        }

        // Настройка обработчиков событий
        function setupEventListeners() {
            cartIcon.addEventListener('click', () => {
                cartModal.style.display = 'flex';
            });
            
            closeCart.addEventListener('click', () => {
                cartModal.style.display = 'none';
            });
            
            checkoutBtn.addEventListener('click', checkout);
            
            categoryFilter.addEventListener('change', filterProducts);
            brandFilter.addEventListener('change', filterProducts);
            priceFilter.addEventListener('input', updatePriceInputs);
            minPriceInput.addEventListener('change', updatePriceSlider);
            maxPriceInput.addEventListener('change', updatePriceSlider);
            
            // Навигация по разделам
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const sectionId = link.getAttribute('data-section');
                    changeSection(sectionId);
                });
            });
            
            catalogBtn.addEventListener('click', (e) => {
                e.preventDefault();
                changeSection('catalog');
            });
            
            // Обработка формы обратной связи
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
                contactForm.reset();
            });
            
            // Применение промокода
            applyPromo.addEventListener('click', applyPromoCode);
            
            // Управление пользователем
            userIcon.addEventListener('click', (e) => {
                e.stopPropagation();
            });
            
            dropdownLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const sectionId = link.getAttribute('data-section');
                    changeSection(sectionId);
                    userDropdown.style.display = 'none';
                });
            });
            
            logoutLink.addEventListener('click', (e) => {
                e.preventDefault();
                logout();
            });
            
            // Переключение вкладок авторизации
            authTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    const tabId = tab.getAttribute('data-tab');
                    switchAuthTab(tabId);
                });
            });
            
            // Формы авторизации
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                login();
            });
            
            registerForm.addEventListener('submit', (e) => {
                e.preventDefault();
                register();
            });
            
            // Закрытие dropdown при клике вне его
            document.addEventListener('click', () => {
                userDropdown.style.display = 'none';
            });
        }

        // Обновление интерфейса пользователя
        function updateUserUI() {
            if (currentUser) {
                userText.textContent = currentUser.name;
                profileLink.style.display = 'block';
                logoutLink.style.display = 'block';
                
                // Обновляем информацию в профиле
                if (userName && userEmail) {
                    userName.textContent = currentUser.name;
                    userEmail.textContent = currentUser.email;
                }
                
                // Загружаем историю заказов
                if (ordersHistory) {
                    loadOrdersHistory();
                }
            } else {
                userText.textContent = 'Войти';
                profileLink.style.display = 'none';
                logoutLink.style.display = 'none';
            }
        }

        // Переключение между разделами
        function changeSection(sectionId) {
            // Обновляем активную ссылку в навигации
            navLinks.forEach(link => {
                if (link.getAttribute('data-section') === sectionId) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
            
            // Показываем активный раздел
            sections.forEach(section => {
                if (section.id === sectionId) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
            
            // Прокрутка к верху страницы
            window.scrollTo(0, 0);
        }

        // Переключение вкладок авторизации
        function switchAuthTab(tabId) {
            authTabs.forEach(tab => {
                if (tab.getAttribute('data-tab') === tabId) {
                    tab.classList.add('active');
                } else {
                    tab.classList.remove('active');
                }
            });
            
            if (tabId === 'login') {
                loginForm.classList.add('active');
                registerForm.classList.remove('active');
            } else {
                loginForm.classList.remove('active');
                registerForm.classList.add('active');
            }
        }

        // Регистрация
        function register() {
            const name = document.getElementById('registerName').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('registerConfirmPassword').value;
            
            if (password !== confirmPassword) {
                alert('Пароли не совпадают!');
                return;
            }
            
            // Проверяем, существует ли пользователь
            if (users.find(user => user.email === email)) {
                alert('Пользователь с таким email уже существует!');
                return;
            }
            
            // Создаем нового пользователя
            const newUser = {
                id: Date.now(),
                name,
                email,
                password, // В реальном приложении пароль нужно хэшировать!
                orders: []
            };
            
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            
            // Автоматически входим
            currentUser = newUser;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            
            alert('Регистрация прошла успешно!');
            updateUserUI();
            changeSection('main');
        }

        // Вход
        function login() {
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            const user = users.find(user => user.email === email && user.password === password);
            
            if (user) {
                currentUser = user;
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                alert('Вход выполнен успешно!');
                updateUserUI();
                changeSection('main');
            } else {
                alert('Неверный email или пароль!');
            }
        }

        // Выход
        function logout() {
            currentUser = null;
            localStorage.removeItem('currentUser');
            alert('Вы вышли из системы');
            updateUserUI();
            changeSection('main');
        }

        // Загрузка истории заказов
        function loadOrdersHistory() {
            if (!currentUser || !currentUser.orders) {
                ordersHistory.innerHTML = '<div class="empty-cart"><p>У вас нет заказов</p></div>';
                return;
            }
            
            ordersHistory.innerHTML = '';
            
            currentUser.orders.forEach(order => {
                const orderElement = document.createElement('div');
                orderElement.className = 'order-item';
                
                const orderDate = new Date(order.date).toLocaleDateString('ru-RU');
                
                orderElement.innerHTML = `
                    <div class="order-info">
                        <h3>Заказ #${order.id}</h3>
                        <p>${orderDate} • ${order.items.length} товаров • ${order.total.toLocaleString()} руб.</p>
                    </div>
                    <div class="order-status status-${order.status === 'delivered' ? 'delivered' : 'processing'}">
                        ${order.status === 'delivered' ? 'Доставлен' : 'В обработке'}
                    </div>
                `;
                
                ordersHistory.appendChild(orderElement);
            });
        }

        // Отображение товаров
        function displayProducts(productsToShow = products) {
            productsGrid.innerHTML = '';
            
            if (productsToShow.length === 0) {
                productsGrid.innerHTML = '<p class="empty-cart">Товары не найдены</p>';
                return;
            }
            
            productsToShow.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    ${product.inStock ? '<div class="product-badge">В наличии</div>' : '<div class="product-badge" style="background-color: #888;">Нет в наличии</div>'}
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                        <div class="product-price">${product.price.toLocaleString()} <span>руб.</span></div>
                        <div class="product-actions">
                            <button class="add-to-cart" data-id="${product.id}" ${!product.inStock ? 'disabled' : ''}>
                                <i class="fas fa-shopping-cart"></i> В корзину
                            </button>
                            <a href="#" class="view-details" data-id="${product.id}">
                                <i class="fas fa-eye"></i> Подробнее
                            </a>
                        </div>
                    </div>
                `;
                productsGrid.appendChild(productCard);
            });
            
            // Добавление обработчиков событий для кнопок "В корзину"
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const productId = parseInt(e.target.closest('.add-to-cart').getAttribute('data-id'));
                    addToCart(productId);
                });
            });
            
            // Добавление обработчиков для кнопок "Подробнее"
            document.querySelectorAll('.view-details').forEach(button => {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const productId = parseInt(button.getAttribute('data-id'));
                    showProductDetails(productId);
                });
            });
            
            // Открытие страницы товара при клике на карточку
            document.querySelectorAll('.product-card').forEach(card => {
                card.addEventListener('click', (e) => {
                    if (!e.target.closest('.add-to-cart') && !e.target.closest('.view-details')) {
                        const productId = parseInt(card.querySelector('.add-to-cart').getAttribute('data-id'));
                        showProductDetails(productId);
                    }
                });
            });
        }

        // Показать детальную информацию о товаре
        function showProductDetails(productId) {
            const product = products.find(p => p.id === productId);
            if (!product) return;
            
            currentProduct = product;
            
            // Заполняем информацию о товаре
            productDetail.innerHTML = `
                <div class="product-detail-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-detail-info">
                    <h1 class="product-detail-title">${product.name}</h1>
                    <div class="product-detail-price">${product.price.toLocaleString()} руб.</div>
                    <p class="product-detail-description">${product.description}</p>
                    
                    <div class="product-detail-meta">
                        <div class="product-meta-item">
                            <span class="product-meta-label">Категория</span>
                            <span class="product-meta-value">${getCategoryName(product.category)}</span>
                        </div>
                        <div class="product-meta-item">
                            <span class="product-meta-label">Марка</span>
                            <span class="product-meta-value">${product.brand.toUpperCase()}</span>
                        </div>
                        <div class="product-meta-item">
                            <span class="product-meta-label">Наличие</span>
                            <span class="product-meta-value">${product.inStock ? 'В наличии' : 'Нет в наличии'}</span>
                        </div>
                        <div class="product-meta-item">
                            <span class="product-meta-label">Рейтинг</span>
                            <span class="product-meta-value">${product.rating} / 5</span>
                        </div>
                    </div>
                    
                    <h3>Характеристики</h3>
                    <ul>
                        ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                    
                    <div class="product-detail-actions">
                        <div class="quantity-selector">
                            <button class="quantity-btn" id="decreaseQuantity">-</button>
                            <input type="number" class="quantity-input" id="productQuantity" value="1" min="1">
                            <button class="quantity-btn" id="increaseQuantity">+</button>
                        </div>
                        <button class="btn" id="addToCartDetail" ${!product.inStock ? 'disabled' : ''}>
                            <i class="fas fa-shopping-cart"></i> Добавить в корзину
                        </button>
                    </div>
                </div>
            `;
            
            // Обработчики для изменения количества
            document.getElementById('decreaseQuantity').addEventListener('click', () => {
                const quantityInput = document.getElementById('productQuantity');
                if (quantityInput.value > 1) {
                    quantityInput.value = parseInt(quantityInput.value) - 1;
                }
            });
            
            document.getElementById('increaseQuantity').addEventListener('click', () => {
                const quantityInput = document.getElementById('productQuantity');
                quantityInput.value = parseInt(quantityInput.value) + 1;
            });
            
            // Обработчик для добавления в корзину
            document.getElementById('addToCartDetail').addEventListener('click', () => {
                const quantity = parseInt(document.getElementById('productQuantity').value);
                for (let i = 0; i < quantity; i++) {
                    addToCart(product.id);
                }
                alert('Товар добавлен в корзину!');
            });
            
            // Показываем сопутствующие товары
            showRelatedProducts(product.category, product.id);
            
            // Переходим на страницу товара
            changeSection('product');
        }

        // Показать сопутствующие товары
        function showRelatedProducts(category, excludeId) {
            const related = products.filter(p => p.category === category && p.id !== excludeId).slice(0, 4);
            
            relatedProducts.innerHTML = '';
            
            if (related.length === 0) {
                relatedProducts.innerHTML = '<p>Нет сопутствующих товаров</p>';
                return;
            }
            
            related.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    ${product.inStock ? '<div class="product-badge">В наличии</div>' : '<div class="product-badge" style="background-color: #888;">Нет в наличии</div>'}
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                        <div class="product-price">${product.price.toLocaleString()} <span>руб.</span></div>
                        <div class="product-actions">
                            <button class="add-to-cart" data-id="${product.id}" ${!product.inStock ? 'disabled' : ''}>
                                <i class="fas fa-shopping-cart"></i> В корзину
                            </button>
                            <a href="#" class="view-details" data-id="${product.id}">
                                <i class="fas fa-eye"></i> Подробнее
                            </a>
                        </div>
                    </div>
                `;
                relatedProducts.appendChild(productCard);
            });
            
            // Добавляем обработчики событий для кнопок
            document.querySelectorAll('#relatedProducts .add-to-cart').forEach(button => {
                button.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const productId = parseInt(button.getAttribute('data-id'));
                    addToCart(productId);
                });
            });
            
            document.querySelectorAll('#relatedProducts .view-details').forEach(button => {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const productId = parseInt(button.getAttribute('data-id'));
                    showProductDetails(productId);
                });
            });
        }

        // Получить название категории
        function getCategoryName(category) {
            const categories = {
                'engine': 'Двигатель',
                'brakes': 'Тормозная система',
                'suspension': 'Подвеска',
                'electrics': 'Электрика',
                'transmission': 'Трансмиссия',
                'body': 'Кузовные детали'
            };
            
            return categories[category] || category;
        }

        // Отображение популярных товаров
        function displayFeaturedProducts() {
            // Выбираем 4 случайных товара как популярные
            const featured = [...products].sort(() => 0.5 - Math.random()).slice(0, 4);
            
            featured.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    ${product.inStock ? '<div class="product-badge">В наличии</div>' : '<div class="product-badge" style="background-color: #888;">Нет в наличии</div>'}
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                        <div class="product-price">${product.price.toLocaleString()} <span>руб.</span></div>
                        <div class="product-actions">
                            <button class="add-to-cart" data-id="${product.id}" ${!product.inStock ? 'disabled' : ''}>
                                <i class="fas fa-shopping-cart"></i> В корзину
                            </button>
                            <a href="#" class="view-details" data-id="${product.id}">
                                <i class="fas fa-eye"></i> Подробнее
                            </a>
                        </div>
                    </div>
                `;
                featuredProducts.appendChild(productCard);
            });
            
            // Добавление обработчиков событий для кнопок "В корзину"
            document.querySelectorAll('#featuredProducts .add-to-cart').forEach(button => {
                button.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const productId = parseInt(button.getAttribute('data-id'));
                    addToCart(productId);
                });
            });
            
            // Добавление обработчиков для кнопок "Подробнее"
            document.querySelectorAll('#featuredProducts .view-details').forEach(button => {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const productId = parseInt(button.getAttribute('data-id'));
                    showProductDetails(productId);
                });
            });
        }

        // Добавление товара в корзину
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1
                });
            }
            
            updateCart();
            saveCartToLocalStorage();
            
            // Анимация добавления в корзину
            cartIcon.classList.add('animate');
            setTimeout(() => {
                cartIcon.classList.remove('animate');
            }, 500);
        }

        // Обновление корзины
        function updateCart() {
            const totalCount = cart.reduce((total, item) => total + item.quantity, 0);
            cartCount.textContent = totalCount;
            
            cartItems.innerHTML = '';
            
            if (cart.length === 0) {
                cartItems.innerHTML = `
                    <div class="empty-cart">
                        <i class="fas fa-shopping-cart"></i>
                        <p>Ваша корзина пуста</p>
                    </div>
                `;
                updateCartSummary(0, 0, 0);
                return;
            }
            
            let total = 0;
            
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;
                
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <div class="item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="item-info">
                        <div class="item-title">${item.name}</div>
                        <div class="item-price">${item.price.toLocaleString()} руб. x ${item.quantity} = ${itemTotal.toLocaleString()} руб.</div>
                    </div>
                    <div class="item-quantity">
                        <button class="quantity-btn minus" data-id="${item.id}">-</button>
                        <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">
                        <button class="quantity-btn plus" data-id="${item.id}">+</button>
                    </div>
                    <button class="remove-item" data-id="${item.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                `;
                cartItems.appendChild(cartItem);
            });
            
            // Пересчет итоговой суммы
            calculateCartTotal(total);
            
            // Добавление обработчиков событий для кнопок изменения количества
            document.querySelectorAll('.quantity-btn.plus').forEach(button => {
                button.addEventListener('click', (e) => {
                    const id = parseInt(button.getAttribute('data-id'));
                    changeQuantity(id, 1);
                });
            });
            
            document.querySelectorAll('.quantity-btn.minus').forEach(button => {
                button.addEventListener('click', (e) => {
                    const id = parseInt(button.getAttribute('data-id'));
                    changeQuantity(id, -1);
                });
            });
            
            document.querySelectorAll('.remove-item').forEach(button => {
                button.addEventListener('click', (e) => {
                    const id = parseInt(button.getAttribute('data-id'));
                    removeFromCart(id);
                });
            });
            
            document.querySelectorAll('.quantity-input').forEach(input => {
                input.addEventListener('change', (e) => {
                    const id = parseInt(input.getAttribute('data-id'));
                    setQuantity(id, parseInt(input.value));
                });
            });
        }

        // Расчет итоговой суммы корзины
        function calculateCartTotal(subtotalValue) {
            // Расчет скидки
            let discountValue = 0;
            if (appliedPromo === 'DISCOUNT10') {
                discountValue = subtotalValue * 0.1; // 10% скидка
            }
            
            // Расчет доставки (бесплатно при заказе от 10000 руб)
            const shippingValue = subtotalValue - discountValue >= 10000 ? 0 : 500;
            
            // Итоговая сумма
            const totalValue = subtotalValue - discountValue + shippingValue;
            
            // Обновление интерфейса
            updateCartSummary(subtotalValue, discountValue, shippingValue, totalValue);
        }

        // Обновление сводки корзины
        function updateCartSummary(subtotalValue, discountValue, shippingValue, totalValue = 0) {
            itemsCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
            subtotal.textContent = `${subtotalValue.toLocaleString()} руб.`;
            discount.textContent = `-${discountValue.toLocaleString()} руб.`;
            shipping.textContent = shippingValue === 0 ? 'Бесплатно' : `${shippingValue.toLocaleString()} руб.`;
            
            if (totalValue > 0) {
                cartTotal.textContent = `${totalValue.toLocaleString()} руб.`;
            } else {
                cartTotal.textContent = '0 руб.';
            }
        }

        // Изменение количества товара
        function changeQuantity(productId, delta) {
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity += delta;
                if (item.quantity < 1) {
                    item.quantity = 1;
                }
                updateCart();
                saveCartToLocalStorage();
            }
        }

        // Установка количества товара
        function setQuantity(productId, quantity) {
            if (quantity < 1) quantity = 1;
            
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity = quantity;
                updateCart();
                saveCartToLocalStorage();
            }
        }

        // Удаление товара из корзины
        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCart();
            saveCartToLocalStorage();
        }

        // Применение промокода
        function applyPromoCode() {
            const code = promoCode.value.trim();
            
            if (code === 'DISCOUNT10') {
                appliedPromo = code;
                alert('Промокод применен! Скидка 10% на весь заказ.');
                
                // Пересчет суммы корзины
                const subtotalValue = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
                calculateCartTotal(subtotalValue);
            } else {
                alert('Неверный промокод! Попробуйте другой.');
            }
        }

        // Оформление заказа
        function checkout() {
            if (cart.length === 0) {
                alert('Корзина пуста! Добавьте товары перед оформлением заказа.');
                return;
            }
            
            if (!currentUser) {
                alert('Для оформления заказа необходимо войти в систему.');
                changeSection('login');
                return;
            }
            
            // Создаем заказ
            const order = {
                id: Date.now(),
                date: new Date().toISOString(),
                items: [...cart],
                total: cart.reduce((total, item) => total + (item.price * item.quantity), 0),
                status: 'processing'
            };
            
            // Добавляем заказ в историю пользователя
            currentUser.orders = currentUser.orders || [];
            currentUser.orders.push(order);
            
            // Обновляем данные пользователя
            const userIndex = users.findIndex(u => u.id === currentUser.id);
            if (userIndex !== -1) {
                users[userIndex] = currentUser;
                localStorage.setItem('users', JSON.stringify(users));
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
            }
            
            // Очищаем корзину
            cart = [];
            appliedPromo = null;
            updateCart();
            saveCartToLocalStorage();
            
            // Показываем чек
            showReceipt(order);
            
            alert('Заказ оформлен! Спасибо за покупку!');
            cartModal.style.display = 'none';
        }

        // Показать чек
        function showReceipt(order) {
            const receiptSection = document.createElement('section');
            receiptSection.id = 'receipt';
            receiptSection.className = 'section';
            receiptSection.innerHTML = `
                <div class="container">
                    <h2 class="section-title">Чек заказа</h2>
                    <div class="receipt">
                        <div class="receipt-header">
                            <h2>AutoParts</h2>
                            <p>Заказ #${order.id}</p>
                            <p>${new Date(order.date).toLocaleDateString('ru-RU')}</p>
                        </div>
                        
                        <div class="receipt-items">
                            ${order.items.map(item => `
                                <div class="receipt-item">
                                    <span>${item.name} x${item.quantity}</span>
                                    <span>${(item.price * item.quantity).toLocaleString()} руб.</span>
                                </div>
                            `).join('')}
                        </div>
                        
                        <div class="receipt-total">
                            <span>Итого:</span>
                            <span>${order.total.toLocaleString()} руб.</span>
                        </div>
                        
                        <div style="text-align: center; margin-top: 30px;">
                            <button class="btn" id="backToCatalog">Вернуться в каталог</button>
                        </div>
                    </div>
                </div>
            `;
            
            document.body.appendChild(receiptSection);
            
            // Показываем чек
            changeSection('receipt');
            
            // Обработчик для кнопки возврата
            document.getElementById('backToCatalog').addEventListener('click', () => {
                receiptSection.remove();
                changeSection('catalog');
            });
        }

        // Сохранение корзины в Local Storage
        function saveCartToLocalStorage() {
            localStorage.setItem('cart', JSON.stringify(cart));
        }

        // Обновление полей цены при изменении ползунка
        function updatePriceInputs() {
            minPriceInput.value = 0;
            maxPriceInput.value = priceFilter.value;
            filterProducts();
        }

        // Обновление ползунка при изменении полей цены
        function updatePriceSlider() {
            let minPrice = parseInt(minPriceInput.value) || 0;
            let maxPrice = parseInt(maxPriceInput.value) || 50000;
            
            if (minPrice < 0) minPrice = 0;
            if (maxPrice > 50000) maxPrice = 50000;
            if (minPrice > maxPrice) minPrice = maxPrice;
            
            minPriceInput.value = minPrice;
            maxPriceInput.value = maxPrice;
            
            priceFilter.value = maxPrice;
            filterProducts();
        }

        // Фильтрация товаров
        function filterProducts() {
            const category = categoryFilter.value;
            const brand = brandFilter.value;
            const minPrice = parseInt(minPriceInput.value) || 0;
            const maxPrice = parseInt(maxPriceInput.value) || 50000;
            
            const filteredProducts = products.filter(product => {
                return (category === 'all' || product.category === category) &&
                       (brand === 'all' || product.brand === brand) &&
                       product.price >= minPrice &&
                       product.price <= maxPrice;
            });
            
            displayProducts(filteredProducts);
        }

        // Инициализация при загрузке страницы
        window.addEventListener('DOMContentLoaded', init);
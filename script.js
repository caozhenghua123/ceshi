/**
 * 导航栏滚动效果
 * 当页面滚动时，导航栏背景变化
 */
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.nav-container');
    
    // 监听滚动事件
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            // 滚动超过50px时，导航栏背景变得更不透明
            nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            // 回到顶部时，导航栏恢复原样
            nav.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            nav.style.boxShadow = 'none';
        }
    });
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60, // 减去导航栏高度
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 添加表单提交事件
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 这里可以添加表单验证和提交逻辑
            alert('感谢您的留言！在实际应用中，这里会处理表单提交。');
            
            // 清空表单
            this.reset();
        });
    }
    
    // 添加技能卡片动画效果
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        // 错开动画开始时间
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });
}); 
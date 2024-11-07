document.addEventListener("DOMContentLoaded", () => {
    const formContainer = document.getElementById("formContainer");
    const asideMenuItems = document.querySelectorAll(".aside-menu li");

   
    const forms = Object.freeze({
        enquireForm: `
            <h2>Enquire About Product</h2>
            <form>
                <div class="form-group">
                    <label for="productName">Product Name:</label>
                    <input type="text" id="productName" placeholder="Enter product name" required>
                </div>
                <div class="form-group">
                    <label for="name">Your Name:</label>
                    <input type="text" id="name" placeholder="Enter your name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" placeholder="Enter your email" required>
                </div>
                <button type="submit" class="submit-btn">Submit</button>
            </form>
        `,
        warrantyForm: `
            <h2>Warranty Related Information</h2>
            <form>
                <div class="form-group">
                    <label for="productName">Product Name:</label>
                    <input type="text" id="productName" placeholder="Enter product name" required>
                </div>
                <div class="form-group">
                    <label for="purchaseDate">Purchase Date:</label>
                    <input type="date" id="purchaseDate" required>
                </div>
                <div class="form-group">
                    <label for="issue">Issue Description:</label>
                    <textarea id="issue" placeholder="Describe the issue" required></textarea>
                </div>
                <button type="submit" class="submit-btn">Submit</button>
            </form>
        `,
        queryForm: `
            <h2>Raise a Query</h2>
            <form>
                <div class="form-group">
                    <label for="query">Your Query:</label>
                    <textarea id="query" placeholder="Enter your query" required></textarea>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" placeholder="Enter your email" required>
                </div>
                <button type="submit" class="submit-btn">Submit</button>
            </form>
        `,
        generalForm: `
            <h2>General Contact Form</h2>
            <form>
                <div class="form-group">
                    <label for="name">Your Name:</label>
                    <input type="text" id="name" placeholder="Enter your name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" placeholder="Enter your email" required>
                </div>
                <div class="form-group">
                    <label for="message">Message:</label>
                    <textarea id="message" placeholder="Enter your message" required></textarea>
                </div>
                <button type="submit" class="submit-btn">Submit</button>
            </form>
        `,
    });

    const renderForm = (formName) => {
        formContainer.innerHTML = forms[formName];
    };

  
    renderForm('generalForm');

   
    asideMenuItems.forEach(item => {
        item.addEventListener("click", () => {
            const targetForm = item.dataset.target;
            renderForm(targetForm);
        });
    });
});

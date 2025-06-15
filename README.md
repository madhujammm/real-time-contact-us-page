# 💌 Contact Form with EmailJS (No Backend Needed!)

A clean and responsive **Contact Us** form built using HTML, CSS, and JavaScript that sends submitted user information directly to your **Gmail inbox in real time** using [EmailJS](https://www.emailjs.com/).  
⚡ No server or backend required!

---

## 🚀 Features

- 📩 Sends emails directly from the frontend
- 🔒 Secure with EmailJS public key system
- 💻 100% frontend-only — perfect for static websites
- 🧠 Simple and easy to integrate with your own design

---


## 🔧 How to Set Up EmailJS (Step-by-Step)

### 1️⃣ Create an EmailJS Account
- Go to [https://www.emailjs.com](https://www.emailjs.com)
- Sign up using your Gmail

---

### 2️⃣ Connect Your Gmail
- Navigate to **Email Services** tab
- Click **“Add New Service”**
- Choose **Gmail**
- Click **“Connect Account”**
- ✅ **Check the box**: “Send email on your behalf”
- Click **Continue**

> 🔐 You'll receive your **Service ID** like:  
> `service_abc123`

---

### 3️⃣ Create a Template
- Go to **Email Templates** tab
- Click **"Create New Template"**
- Add variables:
  - `name`
  - `email`
  - `title`
  - `message`

📄 Example template content:


> 💡 Save it and copy your **Template ID**:  

---

### 4️⃣ Get Your Public API Key
- Go to **Account → API Keys**
- Copy your **Public Key**, like:  

---

## ✨ Integrate the IDs in Your Code

In `script.js`, paste your values:

```javascript
// Initialize EmailJS
emailjs.init("YOUR_PUBLIC_KEY");

// Send form on submit
emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this);



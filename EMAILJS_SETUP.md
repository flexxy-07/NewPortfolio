# EmailJS Setup Guide

The contact form needs EmailJS to send emails. Follow these steps to set it up (it's free for 200 emails/month):

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to **"Email Services"** in the left sidebar
2. Click **"Add New Service"**
3. Select **Gmail** (or your preferred email provider)
4. Connect your email account (sumitrpt007@gmail.com)
5. Click **"Create Service"**
6. **COPY YOUR SERVICE ID** (looks like `service_xxxxxxx`)

## Step 3: Create Email Template

1. Go to **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. Set these values:

**Template Name:** Portfolio Contact Form

**Subject:** New Contact from {{from_name}}

**Template Content:**
```
You have received a new message from your portfolio website!

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Click **"Save"**
5. **COPY YOUR TEMPLATE ID** (looks like `template_xxxxxxx`)

## Step 4: Get Your Public Key

1. Go to **"Account"** in the left sidebar (or click your profile)
2. Look for **"General"** or **"API Keys"** section
3. **COPY YOUR PUBLIC KEY** (looks like a long string of characters)

## Step 5: Update .env.local

1. Open `.env.local` file in your portfolio project
2. Replace the placeholder values with your actual credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key_here
```

## Step 6: Restart Development Server

1. Stop the running dev server (Ctrl+C)
2. Start it again: `npm run dev`
3. Test the contact form!

## Testing

1. Fill out the contact form on your portfolio
2. Click "Send Message"
3. You should see "Message Sent!" appear
4. Check sumitrpt007@gmail.com for the email

## Troubleshooting

**"Something went wrong" error:**
- Check that all three credentials are correct in `.env.local`
- Make sure you restarted the dev server after editing `.env.local`
- Verify the template variables match: `{{from_name}}`, `{{from_email}}`, `{{message}}`
- Check browser console for detailed error messages

**Not receiving emails:**
- Check your spam folder
- Verify your email service is connected properly in EmailJS
- Make sure the email template is saved and published

**"Form not configured" alert:**
- You haven't updated `.env.local` with real credentials yet

## Important Notes

- ✅ Free tier: 200 emails per month
- ✅ No credit card required
- ✅ Environment variables starting with `NEXT_PUBLIC_` are safe to use in the browser
- ⚠️ Never commit your `.env.local` file to git (it's already in .gitignore)

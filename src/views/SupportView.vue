<template>
  <div class="support-view">
    <div class="header">
      <h1>Support</h1>
    </div>

    <div class="container">
      <div class="faq-section">
        <h2>Frequently Asked Questions</h2>

        <div class="faq-item">
          <div class="faq-question" @click="toggleFaq(1)">
            <span>How does price comparison work?</span>
            <span
              class="mdi"
              :class="activeFaq === 1 ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            ></span>
          </div>
          <div class="faq-answer" v-if="activeFaq === 1">
            <p>
              Our app gathers prices from various supermarkets and stores to provide you with
              accurate comparisons. We update our database regularly to ensure that you have access
              to the most current pricing information.
            </p>
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-question" @click="toggleFaq(2)">
            <span>Are the prices always up to date?</span>
            <span
              class="mdi"
              :class="activeFaq === 2 ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            ></span>
          </div>
          <div class="faq-answer" v-if="activeFaq === 2">
            <p>
              We strive to keep all prices current, updating our database daily. However, there
              might be occasional delays or discrepancies due to store promotions or pricing changes
              that haven't been reflected yet.
            </p>
          </div>
        </div>

        <div class="faq-item">
          <div class="faq-question" @click="toggleFaq(3)">
            <span>How can I report a price discrepancy?</span>
            <span
              class="mdi"
              :class="activeFaq === 3 ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            ></span>
          </div>
          <div class="faq-answer" v-if="activeFaq === 3">
            <p>
              If you notice any price discrepancies, please contact our support team using the form
              below. Include the product name, store, and the correct price information.
            </p>
          </div>
        </div>
      </div>

      <div class="contact-section">
        <h2>Contact Us</h2>

        <form class="contact-form" @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="contactForm.name" />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="contactForm.email" />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" v-model="contactForm.message"></textarea>
          </div>

          <button type="submit" class="submit-btn">Send Message</button>
        </form>
      </div>
    </div>

    <TheFooter />
  </div>
</template>

<script>
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'SupportView',
  components: {
    TheFooter,
  },
  data() {
    return {
      activeFaq: null,
      contactForm: {
        name: '',
        email: '',
        message: '',
      },
    }
  },
  methods: {
    toggleFaq(id) {
      this.activeFaq = this.activeFaq === id ? null : id
    },
    submitForm() {
      // Mock form submission
      alert('Thank you for your message. We will get back to you soon!')
      this.contactForm = { name: '', email: '', message: '' }
    },
  },
}
</script>

<style lang="scss" scoped>
.support-view {
  padding-bottom: 60px;
}

.header {
  padding: 20px 16px;
  background-color: #e30613;
  color: white;

  h1 {
    font-size: 22px;
  }
}

h2 {
  margin: 20px 0;
  font-size: 18px;
  font-weight: 600;
}

.faq-item {
  margin-bottom: 10px;
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
}

.faq-question {
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  cursor: pointer;

  span:first-child {
    font-weight: 500;
  }
}

.faq-answer {
  padding: 16px;
  background-color: white;
  border-top: 1px solid #eee;

  p {
    margin: 0;
    color: #666;
    line-height: 1.5;
  }
}

.contact-section {
  margin-top: 30px;
}

.contact-form {
  .form-group {
    margin-bottom: 15px;

    label {
      display: block;
      margin-bottom: 5px;
      font-weight: 500;
    }

    input,
    textarea {
      width: 100%;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 16px;

      &:focus {
        outline: none;
        border-color: #e30613;
      }
    }

    textarea {
      min-height: 120px;
      resize: vertical;
    }
  }

  .submit-btn {
    background-color: #e30613;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 12px 20px;
    font-size: 16px;
    cursor: pointer;
    width: 100%;

    &:hover {
      background-color: darken(#e30613, 10%);
    }
  }
}
</style>

# CareMate - AI-Driven Appointment Booking Enhancement

# Innovator:
Health Innovation Challenge

# Target Entity:
National Health Insurance Center / Ministry of Health (Sehhaty App)

---

**1. Executive Summary**

This project aims to re-engineer the journey for chronic disease patients in primary healthcare centers by integrating artificial intelligence algorithms into the "Sehhaty" application. The system analyzes patient complaints upon booking, automatically triages cases into (in-person attendance or virtual clinic), provides interactive appointment confirmations, and transfers a summary of the patient's condition to the treating physician prior to the visit. This solution aims to improve beneficiary experience, reduce wasted appointments, and reach an average of 4 preventive visits annually per chronic disease patient by 2030.

---

**2. Business Objectives**

* **Increase Preventive Follow-up Rate:** Raise the compliance rate of chronic disease patients for the 4 periodic visits throughout the year.
* **Reduce No-Show Rate:** Minimize wasted appointments through automated cancellation, confirmation, and automatic redirection to waiting lists.
* **Enhance Physician Time Efficiency:** Reduce history-taking time inside the clinic by 30% to 40% by providing an intelligent complaint summary in advance.
* **Optimal Capacity Utilization:** Redirect stable cases to virtual clinics and reduce overcrowding inside primary healthcare centers.

---

**3. Project Scope**

**A. In-Scope:**

* **Patient Interface (Sehhaty App):**
* Complaint and readings input module (Text / Voice via AI Chatbot).
* Smart Triage Algorithm (In-person vs. Virtual).
* Interactive reminder/confirmation system and automated appointment updates.


* **Physician Interface (Clinic System / Telemedicine):**
* Dashboard displaying a "Complaint Summary Card" prior to patient entry.


* **Waiting List Management:**
* Automated re-allocation of declined/canceled appointments to patients registered on the urgent waiting list.



**B. Out-of-Scope:**

* Final medical diagnosis or medication dispensing without human physician review.
* Acute emergency cases (redirected immediately to emergency and ambulance services).

---

**4. Functional Requirements**

| # | Feature / Requirement | Description |
| --- | --- | --- |
| **FR-01** | Smart Complaint Collection | Enable patients to write or record complaints and current readings (blood pressure/glucose) via the smart assistant when requesting an appointment. |
| **FR-02** | Automated Smart Triage | Analyze input data and automatically guide the patient to an in-person clinic or virtual consultation based on pre-set medical criteria. |
| **FR-03** | Interactive Reminders & Confirmation | Send automated smart alerts/calls 48 and 24 hours prior to the appointment requiring attendance confirmation or cancellation. |
| **FR-04** | Waste & Vacancy Management | Upon patient cancellation, the system immediately offers the appointment to the next patient on the waiting list and schedules a new appointment for the canceling patient. |
| **FR-05** | Physician Summary Card | Generate an executive summary of the patient's complaint and readings, displayed on the physician's medical record screen before starting the examination. |
| **FR-06** | Accessibility Features | Provide voice input to support the elderly, and enable the "Family Caregiver" option to manage relatives' appointments. |

---

**5. Non-Functional Requirements**

* **Security & Privacy:** Encrypt all medical data and comply with National Cybersecurity Authority regulations and personal data protection laws.
* **User Experience (UX):** Design a simple, interactive interface suitable for all age groups (elderly and chronic disease patients).
* **Performance & Reliability:** AI assistant response time under 2 seconds, with 99.9% system availability.

---

**6. Risk Management**

| Expected Risk | Impact Level | Mitigation Strategy |
| --- | --- | --- |
| Automated Triage Error | High | Maintain a manual override option, backed by a quick triage nurse review prior to appointment confirmation when necessary. |
| Tech Usability Challenges for Elderly | Medium | Support Voice AI input and allow account linking to a "Family Caregiver." |
| User Resistance to Change | Low | Launch awareness campaigns emphasizing that AI is a supportive tool for better service, not a replacement for human care. |

---

**7. Key Performance Indicators (KPIs)**

* **Adherence Rate:** Increase the proportion of patients completing 4 periodic visits annually to 80%.
* **Appointment Utilization:** Reduce the no-show rate by more than 50%.
* **Visit Duration:** Decrease time spent taking patient complaints inside the clinic by 5 minutes per patient.
* **Beneficiary Satisfaction:** Raise the patient satisfaction index for appointment booking and management to 90%.

---

This project was built with [Lovable](https://lovable.dev).

**Live app**: [https://health-mate-flow.lovable.app](https://health-mate-flow.lovable.app)

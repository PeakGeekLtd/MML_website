# Privacy Policy for RemindMe

**Last updated:** 14 September 2026

RemindMe is provided by **Peak Geek Ltd**, trading as **Mettle & Mind Lab** ("we", "us", "our"), based in Sheffield, United Kingdom. This policy explains what information RemindMe collects, why, and how it is protected. It applies to the RemindMe app on iPhone and iPad, and to any related setup or account services.

If you have questions about this policy, contact us at **support@mettleandmindlab.com**.

---

## 1. The short version

- RemindMe is built so that the content you and your family create — photos, messages, reminders, calendar entries — is **stored in your own Apple iCloud account via CloudKit**, and is only ever visible to the admin's Apple ID and to the family members they specifically invite. We do not have access to it, and neither does anyone else.
- We never store your password. Sign-in is handled securely through our Azure-based identity service.
- The only personal information we hold ourselves is your **email address and display name**, so we can manage your account, keep your subscription and family members working across our apps, and let you know about relevant updates.
- RemindMe does not sell your data, and does not use advertising or tracking SDKs.

The sections below explain this in full detail.

---

## 2. Who we are

RemindMe is developed and operated by Peak Geek Ltd, trading as Mettle & Mind Lab, a UK-based software developer. For the purposes of UK GDPR and the Data Protection Act 2018, we are the **data controller** for the account information described in Section 3, and a **data processor** with no access to the content you store via CloudKit, described in Section 4.

## 3. Information we collect and manage ourselves

To create and manage your RemindMe account, we store the following in our own secure database, hosted on Microsoft Azure:

- **Email address**
- **Display name / username**

We collect this because RemindMe is one app in a small family of tools ("Me Suite") from Mettle & Mind Lab, and this lets us:

- Identify your account and link it to your subscription entitlement
- Recognise you if you use more than one of our apps, so your account can be managed consistently
- Let secondary family members join a shared household under a primary subscriber's entitlement
- Send you service-related messages (for example, trial or subscription notices) and, where relevant, news about features or other Mettle & Mind Lab tools

We do **not** store your password. Authentication is handled by our identity provider (Microsoft Entra External ID) and verified through our Azure backend — your password never passes through or is retained by the RemindMe app itself, and we do not have access to it in plain form.

We do not collect payment card details. Subscription purchases are handled entirely by Apple through StoreKit / the App Store, under Apple's own privacy and payment terms.

## 4. Information stored in your iCloud account (CloudKit)

RemindMe's core content — reminders, calendar entries, messages, photos, voice recordings, and the paired iPad's status information — is stored using Apple's CloudKit, inside the admin's own private iCloud account.

This means:

- This content is **not visible to us**, or to anyone else, unless the admin user chooses to invite them as a family member using Apple's own secure sharing (`CKShare`) — the same mechanism used for shared iCloud photo albums or notes.
- We cannot read, access, or recover this content on your behalf, because we have no technical access to it. If you lose access to the admin's Apple ID (for example, by forgetting the associated Apple ID password) we cannot retrieve this data — only Apple, through their standard Apple ID account recovery process, can help.
- Location information (used to show local weather and sunrise/sunset detail on the paired iPad) is requested from the device's own location services, and is stored and synced via CloudKit in the same private way — it is not sent to or stored by us.

Because CloudKit data lives in your own iCloud account, its handling is also governed by **Apple's Privacy Policy** (available at apple.com/legal/privacy), which we encourage you to review.

## 5. Third parties we rely on

We use a small number of trusted service providers to run RemindMe. None of them are permitted to use your information for their own purposes.

| Provider | What they do for us | What they may process |
|---|---|---|
| **Apple** | CloudKit sync, iCloud storage, App Store purchases and subscriptions, push notifications | Content you store via CloudKit; purchase and subscription status |
| **Microsoft Azure** | Hosts our backend (Azure Functions), our account database, and identity/sign-in (Microsoft Entra External ID) | Email address, display name, sign-in credentials (held by Microsoft, not by us), subscription entitlement status |
| **Azure Communication Services** | Sends account-related emails (e.g. trial expiry notices) | Email address, message content |

We do not use third-party advertising networks, analytics SDKs, or tracking tools in RemindMe.

## 6. Why we process your information — legal basis

Under UK GDPR, we rely on the following legal bases:

- **Performance of a contract** — to create your account, run your subscription/trial, and provide the app's core functionality.
- **Legitimate interests** — to keep our small suite of apps working consistently for users across them, and to maintain the security and reliability of the service.
- **Consent** — where we ask permission for anything beyond what's needed to run the service (for example, optional news about new features).

## 7. Data retention

We keep your account information (email and display name) for as long as your account is active. If you delete your account, we delete this information within a reasonable period, except where we're required to keep limited records for legal, accounting, or fraud-prevention purposes.

Content stored via CloudKit remains under your control at all times, in your own iCloud account, and is governed by your own iCloud storage and retention settings — not ours.

## 8. Your rights

Under UK GDPR, you have the right to:

- Access the personal information we hold about you
- Correct inaccurate information
- Request deletion of your account and associated information
- Restrict or object to certain processing
- Receive a copy of your data in a portable format
- Withdraw consent at any time, where processing is based on consent

To exercise any of these rights, email **support@mettleandmindlab.com**. You can also delete your RemindMe account directly within the app.

If you're not satisfied with our response, you have the right to complain to the UK Information Commissioner's Office (ICO) at ico.org.uk.

## 9. Children and vulnerable users

RemindMe is designed to be *used by* people living with dementia, on a device set up and managed on their behalf by a family admin. RemindMe is not directed at children, and account registration is intended for adult family members acting as the admin. We do not knowingly collect account information directly from children.

## 10. International data transfers

Our account database and backend are hosted on Microsoft Azure infrastructure; Apple's CloudKit and App Store services operate their own global infrastructure. Where information is transferred outside the UK, our providers maintain appropriate safeguards (such as Standard Contractual Clauses) as required under UK GDPR.

## 11. Security

We use industry-standard measures to protect the information we hold, including encrypted connections (HTTPS/TLS), secure credential storage via Azure Key Vault, and authentication through Microsoft's Entra identity platform rather than storing passwords ourselves. Content synced via CloudKit benefits from Apple's own iCloud encryption and security model.

No system can be guaranteed 100% secure, but we take reasonable steps to protect your information against unauthorised access, loss, or misuse.

## 12. Changes to this policy

We may update this policy from time to time, for example as RemindMe's features evolve. We'll update the "Last updated" date above when we do. Significant changes will be highlighted within the app or by email where appropriate.

## 13. Contact us

Questions, requests, or concerns about this policy or your data:

**Email:** support@mettleandmindlab.com
**Company:** Peak Geek Ltd, trading as Mettle & Mind Lab
**Location:** Sheffield, United Kingdom

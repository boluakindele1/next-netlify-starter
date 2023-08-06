import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Privacy Policy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
           <p>

         We are committed to protecting your privacy. This Privacy Policy outlines how we handle your personal information when you use our News Application. We want to assure you that we do not collect any user data or personally identifiable information (PII) during your interaction with our application.

Information Collection:
We do not gather or store any personal information about our users. When you use our News Application, we do not collect data such as your name, email address, location, or any other personal details.

News Content:
Our News Application provides access to a variety of news articles and content. Please note that we do not track, record, or analyze your reading preferences or interactions with the news articles. We respect your privacy and believe that the news consumption should be private.

No User Accounts:
Our News Application does not require you to create any user accounts or log in. You can freely access the news content without providing any personal information.

Cookies and Tracking:
We do not use cookies or any tracking technologies that may collect user data or monitor your activities within our News Application.

Third-Party Links:
Our News Application may contain links to external websites or news sources. Please be aware that this Privacy Policy applies only to our application, and we have no control over the privacy practices of these external sites. We encourage you to review their respective privacy policies before interacting with those websites.

Children's Privacy:
Our News Application is not intended for use by individuals under the age of 13, and we do not knowingly collect any information from children.

Data Security:
While we do not collect user data, we still take data security seriously. We employ appropriate security measures to protect our application and infrastructure from unauthorized access or data breaches.

Changes to this Privacy Policy:
In the event that we decide to change our data collection practices, we will update this Privacy Policy accordingly and inform users of any updates. However, rest assured that our commitment to data privacy remains unchanged.


By using our News Application, you acknowledge and agree to the terms outlined in this Privacy Policy.

Thank you for trusting us with your privacy and staying informed with our News Application.

    </p>

      </main>

      <Footer />
    </div>
  )
}

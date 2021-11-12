import React,{useState} from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {Height} from './SplashScreen'

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Button,
    View,
    Modal,
    Image,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    StatusBar,
  } from 'react-native';

import {Avatar,Title,Caption,Text,TouchableRipple} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MIcons from 'react-native-vector-icons/MaterialIcons'
import {Surface} from 'react-native-paper'
import IconQR from 'react-native-vector-icons/Ionicons'
const image2 =require('../images/background.png')
function Privacy() {
    return (
        <ImageBackground source={image2} resizeMode="cover" style={styles.image}> 
         <ScrollView>
        <Title style={{textAlign:'justify',marginHorizontal:20 ,marginTop:20}}>
        Privacy Policy
    </Title>
    
    <Title style={{textAlign:'justify',marginHorizontal:20}}>
    About This Privacy Policy
    </Title>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    We warmly welcome you to [NAME OF THE APP], when you come to [NAME OF THE APP], For Near-field Communication Related Process and functions, we collect your information. We value your trust, we own our responsibility to retain, preserve and protect your data as per Cyber Laws recommendations and we know how to safeguard our valued customers (“USERS”) information.
   </Text>
   <Text style={{textAlign:'justify',marginHorizontal:20}}>
   The Privacy Policy's salient features help you understand what data we collect, why we collect, how we collect, how you can manage, update or remove your data.
 </Text>
 <Title style={{textAlign:'justify',marginHorizontal:20}}>
 1. Information We Collect
    </Title>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    We collect, but not are limited to, personal and non-personal information. We collect your information, but not limited to, in two ways;
   </Text>
   <Text style={{textAlign:'justify',marginHorizontal:20}}>
   {'\u2B24'}{"  "} Direct information through your input
   </Text>
   <Text style={{textAlign:'justify',marginHorizontal:20}}>
   {'\u2B24'} {"  "}Indirect information through automated technologies
   </Text>
   <Title style={{textAlign:'justify',marginHorizontal:20}}>
   {'\u2B24'}{"  "}Data You Provide to Us
    </Title>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    The types of personal data we collect through direct input include, but are not limited to;
   </Text>
   <Text style={{textAlign:'justify',marginHorizontal:20}}>
   {'\u2B24'}{"  "}Name, Age, Photo, education and Professional history, Biometric information, Phone number, Email address. 

   </Text>
   <Text style={{textAlign:'justify',marginHorizontal:20}}>
   {'\u2B24'}{"  "}Comments, feedback, rating and other information you provide to us, including search query data and questions, surveys or information you send to customer support;

   </Text>
   <Title style={{textAlign:'justify',marginHorizontal:20}}>
   1.2 Data through Automated Technologies
    </Title>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    The Service may automatically collect information about how you and your device interact with the Service, including:
</Text>
<Text style={{textAlign:'justify',marginHorizontal:20}}>
   {'\u2B24'}{"  "} Computer, device and connection information, such as IP address, operating system and other software installed on your device, mobile platform and unique device identifier and other technical identifiers, error reports and performance data;
</Text>
<Text style={{textAlign:'justify',marginHorizontal:20}}>
We collect this data through our servers and the use of cookies and other technologies. You can control cookies through settings. However, if you may block certain cookies, you may miss some features.
</Text>
<Title style={{textAlign:'justify',marginHorizontal:20}}>
2. How We Use Your Information
    </Title>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    Depending on how you interlink with us and the Service, we use your personal information to:
</Text>
<Text style={{textAlign:'justify',marginHorizontal:20}}>
   {'\u2B24'}{"  "} For Commanded process, Provide, activate and manage your, access and use of the Service;
</Text>
<Text style={{textAlign:'justify',marginHorizontal:20}}>
   {'\u2B24'}{"  "} Process and fulfill a request, order, subscription or other transaction related to command;

</Text>
<Text style={{textAlign:'justify',marginHorizontal:20}}>
   {'\u2B24'}{"  "} Enhance and improve the Service, our other products, services, to develop new products, services and benefits;

</Text>
<Text style={{textAlign:'justify',marginHorizontal:20}}>
   {'\u2B24'}{"  "}Offers you tailored products and other personalization to make the Service more relevant to your interests and geography;
</Text>
<Text style={{textAlign:'justify',marginHorizontal:20}}>
   {'\u2B24'}{"  "}Greet your requests, inquiries, comments and concerns;
</Text>
<Text style={{textAlign:'justify',marginHorizontal:20}}>
   {'\u2B24'}{"  "}pop you about changes, updates and other announcements related to the Service and our other products and services;
</Text>
<Text style={{textAlign:'justify',marginHorizontal:20}}>
   {'\u2B24'}{"  "}Deliver targeted advertisements, promotional messages, notices and other information related to the Service and your interests you may opt out of these service;

</Text>
<Text style={{textAlign:'justify',marginHorizontal:20}}>
   {'\u2B24'}{"  "}Invite you to participate in surveys as well as promotions;

</Text>
<Text style={{textAlign:'justify',marginHorizontal:20}}>
   {'\u2B24'}{"  "}Identify usage trends and develop data analysis and evaluating our business performance, bilateral trends or in other ways pursuant to a customer agreement; and/or
</Text>
<Text style={{textAlign:'justify',marginHorizontal:20}}>
   {'\u2B24'}{"  "}To Respect our legal obligations, dispute resolution, and enforce our contractual liabilities,
</Text>
<Text style={{textAlign:'justify',marginHorizontal:20}}>
   {'\u2B24'}{"  "}If you are a care taker of an organization with a subscription to the Service, we will use your details to communicate with you about your organization’s subscription and related services. If you supply us contact information of your colleagues, we may contact those individuals with communications about the Service that may include reference to you, for marketing.
</Text>
<Title style={{textAlign:'justify',marginHorizontal:20}}>
3. Sharing of Your Information
    </Title>
    <Title style={{textAlign:'justify',marginHorizontal:20}}>
    3.1 Third Party
    </Title>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    We may share personal information with: 

</Text>

<Text style={{textAlign:'justify',marginHorizontal:20}}>
   {'\u2B24'}{"  "}Our affiliates,


</Text>
<Text style={{textAlign:'justify',marginHorizontal:20}}>
   {'\u2B24'}{"  "}Advertisement agencies,


</Text>
<Text style={{textAlign:'justify',marginHorizontal:20}}>
   {'\u2B24'}{"  "}certain Group companies that provide technology,


</Text>
<Text style={{textAlign:'justify',marginHorizontal:20}}>
   {'\u2B24'}{"  "}customer service and other shared services functions; and/or 


</Text>
<Text style={{textAlign:'justify',marginHorizontal:20}}>
   {'\u2B24'}{"  "}with technical staff, to act upon the guidelines as necessary to keep supply the Service;


</Text>
<Text style={{textAlign:'justify',marginHorizontal:20}}>
   {'\u2B24'}{"  "}To respect transactions, or to fulfill your request about the Service.


</Text>
<Title style={{textAlign:'justify',marginHorizontal:20}}>
3.2 Your Choices 
    </Title>
<Text style={{textAlign:'justify',marginHorizontal:20}}>
We may share your personal information with our advertisement agencies, affiliates and with sponsors, venture partners and other third parties, including entities that we are acting as an agent, licensee, application host or publisher, that wish to send you information about their products and services which will be of interest to you, as determined by your choices in managing your interest preferences and other settings. You may have the opt-out of these services or you may unsubscribe from all of these services. Please take care when disclosing personal information in these public areas.
</Text>
<Title style={{textAlign:'justify',marginHorizontal:20}}>
3.3 For Legal Reasons 
    </Title>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    We also will disclose your personal information if we have an honest faith belief that such disclosure is important to:
</Text>
<Text style={{textAlign:'justify',marginHorizontal:20}}>
   {'\u2B24'}{"  "}Respect applicable law, regulation, legal process, a court order or other legal obligation/liabilities;
</Text>
<Text style={{textAlign:'justify',marginHorizontal:20}}>
   {'\u2B24'}{"  "}detect, investigate, help, prevent security, fraud or technical issues; 
</Text>
<Text style={{textAlign:'justify',marginHorizontal:20}}>
   {'\u2B24'}{"  "}Protect the rights, property or safety of Service,
</Text>
<Text style={{textAlign:'justify',marginHorizontal:20}}>
   {'\u2B24'}{"  "}Our valued users, respected employees or others;
</Text>
<Text style={{textAlign:'justify',marginHorizontal:20}}>
   {'\u2B24'}{"  "}And as a part of a company transaction, like a transfer of assets or merger and acquisition with another company.
</Text>
<Title style={{textAlign:'justify',marginHorizontal:20}}>
4. Accessing and Updating Your Information
    </Title>
    <Title style={{textAlign:'justify',marginHorizontal:20}}>
    4.1 Your Rights
    </Title>
    <Title style={{textAlign:'justify',marginHorizontal:20}}>
    4.1(I) Updating your information 
    </Title>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    You have the privilege under the prevailing laws, as could also be applicable, to request free from charge:
</Text>
<Text style={{textAlign:'justify',marginHorizontal:20}}>
   {'\u2B24'}{"  "}access to and correction or deletion of your personal information;
</Text>
<Text style={{textAlign:'justify',marginHorizontal:20}}>
   {'\u2B24'}{"  "}restriction of our processing of your personal information, or to object to our processing; and
</Text>
<Text style={{textAlign:'justify',marginHorizontal:20}}>
   {'\u2B24'}{"  "}Portability of use of your personal information.
</Text>
<Title style={{textAlign:'justify',marginHorizontal:20}}>
4.1(II) Exporting, removing & deleting your information
    </Title>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
   {'\u2B24'}{"  "}If you would like to Export, removes & deleting your information, please contact us. We'll answer your request.

</Text>
<Text style={{textAlign:'justify',marginHorizontal:20}}>
If you would like to utilize any of those rights, please contact us. We'll answer your request.
</Text>
<Text style={{textAlign:'justify',marginHorizontal:20}}>
Access to non-public information from public records and other sources is subject to applicable laws and our processing notices.
</Text>
<Title style={{textAlign:'justify',marginHorizontal:20}}>
5. Data Retention
    </Title>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    We retain your personal information for as long as necessary to supply the Service and fulfill the transactions you've got requested, or for other essential purposes;
</Text>
<Text style={{textAlign:'justify',marginHorizontal:20}}>
   {'\u2B24'}{"  "}obeying our legal obligations,

</Text>
<Text style={{textAlign:'justify',marginHorizontal:20}}>
   {'\u2B24'}{"  "}Maintaining business and financial records,
</Text>
<Text style={{textAlign:'justify',marginHorizontal:20}}>
   {'\u2B24'}{"  "}Resolving disputes, maintaining security,
</Text>
<Text style={{textAlign:'justify',marginHorizontal:20}}>
   {'\u2B24'}{"  "}Detecting and preventing fraud and abuse, and respect our agreements. 
</Text>
<Text style={{textAlign:'justify',marginHorizontal:20}}>
   {'\u2B24'}{"  "}If you access the Service through a subscription administered or sponsored by your organization, we retain your organizational contact details after the termination of your organization’s subscription till required.
</Text>
<Title style={{textAlign:'justify',marginHorizontal:20}}>
6. Children’s Privacy
    </Title>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    We don't knowingly collect information from children under the age of 18or target the Service to children under 18.
</Text>
<Title style={{textAlign:'justify',marginHorizontal:20}}>
7. Data Security
    </Title>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    We protect you by our max effort to keep your data safe, we use 2FA security layer and technical security measures to assist safeguard your personal information.
</Text>
<Title style={{textAlign:'justify',marginHorizontal:20}}>
8. Grounds for Processing
    </Title>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    When we collect from you any personal information within the scope of entity prevailing laws, we do so:
</Text>
<Text style={{textAlign:'justify',marginHorizontal:20}}>
   {'\u2B24'}{"  "}Where necessary to supply the Service, fulfill a transaction or otherwise perform a contract with you or at your request before getting into a contract;

</Text>
<Text style={{textAlign:'justify',marginHorizontal:20}}>
   {'\u2B24'}{"  "}As necessary to work our business, protect the safety of our systems, customers and users, detect or prevent fraud, enable our customers to suits legal obligations, or fulfill our other legitimate interests as described within the “Information We Collect,” “How We Use Your Information” and “Sharing of Your Information” clauses above, except where our interests are overridden by your privacy rights.

</Text>
<Text style={{textAlign:'justify',marginHorizontal:20}}>
Where we believe your consent to process personal information, you've got the right to withdraw your consent at any time, and where we believe legitimate interests, you'll have the right to object to our processing.
</Text>
<Title style={{textAlign:'justify',marginHorizontal:20}}>
9. Locations of Processing
    </Title>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    Your personal information could also be stored and processed in our database. We take steps, including through contracts, intended to make sure that the information continues to be protected according to the standards of protection required under applicable law.
</Text>
<Title style={{textAlign:'justify',marginHorizontal:20}}>
10. Amendments
    </Title>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    We will put amendments in this privacy policy from time to time. Any amendments are going to be posted on this page with an updated revision date. If we make any material amendments, we'll provide notice through the Service or by other means.
</Text>
<Title style={{textAlign:'justify',marginHorizontal:20}}>
11. Contact
    </Title>
    <Text style={{textAlign:'justify',marginHorizontal:20,marginBottom:20}}>
    If you've got any questions, comments, complaints or requests regarding this privacy policy or our processing of your information, please contact.
    </Text>
    </ScrollView>
  </ImageBackground> 
    )
}
const styles=StyleSheet.create({
    image: {
        width:"100%",
        height:"100%"
       }
 }) 
export default Privacy

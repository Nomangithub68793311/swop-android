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
function Terms() {
  return (
    <ImageBackground source={image2} resizeMode="cover" style={styles.image}> 
     <ScrollView>
     <Title style={{textAlign:'justify',marginHorizontal:20,marginTop:25}}>
     Terms of Service
    </Title>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    These terms of use (these “Terms”) set out the legally binding terms and conditions. Your access to and use of the service website, mobile site, mobile application, products or services (the “Services”) offered by SWOP, a company registered. (“SWOP”, “us”, “our”, and “we”) & SWOP, a company registered in ------------ with registration no ----------- Located 6205 King George dr Charlotte, NC 28213. The “Customer”, “you”, “yours” shall refer to any natural person or entity and it's authorized users that subscribe or uses the Services. Certain attributes of the service may be subject to additional guidelines, terms, or rules, which will be updated on the Site related to such features. All such additional terms, guidelines, and rules are subsumed by reference into these Terms.
By accessing or using the service, you are taking on these Terms (on behalf of yourself or the entity that you represent), and you represent and warrant that you have the privilege, authority, and capacity to enter into these Terms (on behalf of yourself or the entity that you represent). You may not access or use the Site or accept the Terms if you are not 13 years old or not able to use the service as per prevailing laws. If you do not acknowledge all of the provisions of these Terms, do not access and/or use the Site.
These terms require the use of arbitration to resolve disputes, rather than jury trials or class actions and also limit the remedies available to you in the event of a dispute.
We may alter or modify the Terms related to the Services from time to time. Amendments will come into action upon our posting of such updated Terms. If you carry on access or use of the Services after such modifications constitutes your consent to be liable to the Terms, as amended.

    </Text>
    <Title style={{textAlign:'justify',marginHorizontal:20,marginTop:25}}>
    1. Who may use the service
    </Title>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    There are certain requirements to use the service.

    </Text>
    <Title style={{textAlign:'justify',marginHorizontal:20}}>
    1.1 Age Requirement
    </Title>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    Your age must be above 13 to use the service. If you are a minor as per your country applicable laws then you are required to access the service through Parent or legal Guardian.
   </Text>
   <Title style={{textAlign:'justify',marginHorizontal:20}}>
   1.2 Sound Mind

    </Title>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    You are required to be sound mind to use the service, to make sure that you understand all the terms and conditions and all other applicable policies
   </Text>
   <Title style={{textAlign:'justify',marginHorizontal:20}}>
   1.3 Confidential Information

    </Title>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    It’s your prime responsibility to keep secure your purchase process information; in case of any mishandling, you are required to inform SWOP. You further agree to notify SWOP, in case of violation of the above-cited requirements. SWOP cannot and will not be responsible, for any loss or damage if you fail to comply with this provision.
   </Text>
   <Title style={{textAlign:'justify',marginHorizontal:20}}>
   2. Access to service

    </Title>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    Subject to these and other applied terms SWOP permitted you a limited license to use the service and content in accordance with applicable terms. In addition to these terms, there are some other restrictions that SWOP. requires you to follow;
   </Text>
   <Title style={{textAlign:'justify',marginHorizontal:20}}>
   The following limitations apply to your use of the Service. You are not allowed to:

    </Title>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    i.	SWOP contains copyrighted and trademarked material so SWOP access, reproduce, download, distribute, transmit, broadcast, display, sell, license, alter, modify or otherwise use any part of the Service or any Content except (a) as expressly authorized by the Service; or (b) with prior written permission from SWOP and, if applicable, the respective rights holders;   
    </Text>
    
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    ii.	circumvent, disable, fraudulently engage with, or otherwise interfere with any part of the Service (or attempt to do any of these things), including security-related features or features that (a) prevent or restrict the copying or other use of Content or (b) limit or disable the use of the Service or Content;    </Text>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    iii.	use the Service to distribute unsolicited promotional e.g. hate speech, harassment, money laundering etc. or commercial content or other unwanted or mass solicitations;
    </Text>
    <Title style={{textAlign:'justify',marginHorizontal:20}}>
    2.1 Reservation

    </Title>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    SWOP reserves all the rights of ownership. Using the service does not entitle you to any right or claim of ownership in any aspect. 
    </Text>
    <Title style={{textAlign:'justify',marginHorizontal:20}}>
    2.2 Modifications or changes

    </Title>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    SWOP is constantly changing and improving the Service. We may also need to alter or discontinue the Service, or any part of it, in order to make performance or security improvements, change functionality and features, make changes to comply with the law, or prevent illegal activities on or abuse of our systems. These changes may affect all users, some users or even an individual user.  Whenever reasonably possible, we will provide notice when we discontinue or make material changes to our Service that will have an adverse impact on the use of our Service. However, you understand and agree that there will be times when we make such changes without notice, such as where we feel we need to take action to improve the security and operability of our Service, prevent abuse, or comply with legal requirements. 
    </Text>
    <Title style={{textAlign:'justify',marginHorizontal:20}}>
    3. Intellectual Property Claims

    </Title>
    <Title style={{textAlign:'justify',marginHorizontal:20}}>
    3.1 TRADEMARKS AND COPYRIGHTS

    </Title>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    If anyone has any claim regarding intellectual property e.g. content claim, copyright claim and trademark claim shall be dealt with by the arbitration tribunal. The arbitration meeting will be conducted at (city) under the supervision of one appointed arbitrator. If the problem is not solved then the court (state) have jurisdiction to adjudicate the issue.
    </Text>
    <Title style={{textAlign:'justify',marginHorizontal:20}}>
    4. Orders and cancellations 

    </Title>
    <Title style={{textAlign:'justify',marginHorizontal:20}}>
    4.1 Orders and Contract

    </Title>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    The contract shall not become effective merely upon your order for goods, the agreement will become effective when we accept your order against the consideration amount and your order are dispatched from our warehouse then agreement becomes a contract. For security reasons, we may restrict the volume of a certain item in one transaction.
    </Text>
    <Title style={{textAlign:'justify',marginHorizontal:20}}>
    4.2 Cancelling Your Order

    </Title>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    Under Consumer Regulations our valued customers have the right to cancel the order but not later than 14 days, if you wish to cancel your order due to specific reasons as per company policy, you should inform us in writing whether by mail. If you wish to return goods to us, must return the goods in original packaging, during the transit to our any loss or damage caused to the product we may charge you against that damage. We advised using the secure transit method.
    </Text>
    <Title style={{textAlign:'justify',marginHorizontal:20}}>
    5. Delivery Terms

    </Title>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    Your order will be delivered to your desired address which you fill on the checkout page. Please fill in the postal address very carefully we may not be held accountable for any wrong delivery made due to your wrong address provided.
    </Text>
    <Title style={{textAlign:'justify',marginHorizontal:20}}>
    6. Returns & Refunds

    </Title>
    <Title style={{textAlign:'justify',marginHorizontal:20}}>
    6.1 Returning to a Store

    </Title>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    You may return the goods in a new and unused condition and wherever possible in the original packaging. If you want to cancel/return your order you must tell us within 14 days (beginning on the day after the day you receive the goods), and you then have 14 days to return the goods. SWOP shall not accept return, if you made customized orders.
    </Text>
    <Title style={{textAlign:'justify',marginHorizontal:20}}>
    6.2 Refunds

    </Title>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    You may claim refunds less than 30 days, but if the NFC shipped to you then the company may refund you half payment of the claim with subject to standard charges.
    </Text>
    <Title style={{textAlign:'justify',marginHorizontal:20}}>
    7. Termination and suspension

    </Title>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    If SWOP found any type of violation of the policies from your side may suspend or terminate your access to use the service.
    </Text>
    <Title style={{textAlign:'justify',marginHorizontal:20}}>
    7.1 Notice for Termination or Suspension

    </Title>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    We will notify you with the reason for termination or suspension by SWOP unless we reasonably believe that to do so, where reasonably possible, you will be provided with sufficient time to export your data from the Service. If you believe your SWOP account has been terminated or suspended in error, you can file an appeal.
    </Text>
    <Title style={{textAlign:'justify',marginHorizontal:20}}>
    8. Warranty Disclaimer

    </Title>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    OTHER THAN AS EXPRESSLY STATED IN THIS AGREEMENT OR AS REQUIRED BY LAW, THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE”.SWOP  EXPRESSLY DISCLAIMS ANY AND ALL WARRANTIES AND CONDITIONS OF ANY TYPE WHETHER EXPRESS OR IMPLIED STATUTORY, INCLUDING ALL WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, QUIET ENJOYMENT, ACCURACY, OR NON-INFRINGEMENT. 
    </Text>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    SWOP AND THIRD-PARTY PROVIDER ALSO FORECAST NO RESPONSIBILITY AND SHALL NOT BE LIABLE FOR ANY DAMAGES OR VIRUSES THAT MAY CAUSE INFECTION TO YOUR COMPUTER EQUIPMENT OR OTHER PROPERTY ARISING FROM OR RELATED TO, ACCESS TO, USE OF, OR THE DOWNLOADING OF ANY MATERIALS, DATA, TEXT, IMAGES, VIDEO OR AUDIO FROM THE SERVICE.
    </Text>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
     SWOP SHALL NOT LIABLE FOR ANY LOSS OR DAMAGE WHATEVER NATURE (DIRECT OR INDIRECT NATURE) WHETHER ARISING IN CONTRACT, TORT OR OTHERWISE, WHICH MAY ARISE AS A RESULT OF THE USE OF TO (INABILITY TO USE) THIS WEBSITE/APP. THE CONTENTS OF THIS WEBSITE/ APP, LIKE AUDIO/VIDEO CALL, TEXT, GRAPHICS, IMAGES, VIDEOS AND OTHER SERVICES CONTAINED ON THIS WEBSITE/APP OR RELATED INFORMATION OR THIRD PARTY CONTENT CONTAINED ON THIS WEBSITE FOR ANY PURPOSE. THE USERS OF OUR SITE/APP SHALL BE LIABLE FOR THEIR OWN VIRUS AND SECURITY ISSUES AND SHALL NOT USE OUR WEBSITE IN ANY ILLEGAL, FRAUDULENT, OR HARMFUL WAY. WE DON'T GUARANTEE THE ACCURACY, TIMELINESS, COMPLETENESS OR FITNESS FOR PURPOSE OF THE THIRD-PARTY CONTENT PROVIDED BY THIS WEBSITE/APP OR THAT USE OF THIS WEBSITE/APP IS GOING TO BE UNINTERRUPTED, VIRUS-FREE OR ERROR-FREE. WE DON'T ACCEPT ANY RESPONSIBILITY FOR ANY ERRORS, OMISSIONS OR INACCURATE INFORMATION SUPPLIED BY THIRD PARTIES. YOU ACKNOWLEDGE AND AGREE THAT WE AREN'T LIABLE FOR THE SUPPLY OF SUCH EXTERNAL WEBSITES OR RESOURCES, WHICH WE DON'T ENDORSE AND CANNOT BE RESPONSIBLE FOR ANY SERVICE, ADVERTISING, PRODUCTS, OR OTHER MATERIALS ON OR AVAILABLE FROM SUCH WEBSITES OR RESOURCES. YOU EXTRA ACKNOWLEDGE AND AGREE THAT WE AREN'T RESPONSIBLE, DIRECTLY OR INDIRECTLY, FOR ANY DAMAGE OR LOSS CAUSED OR IMAGINED TO BE CAUSED BY OR ABOUT THE USE OF OR RELIANCE ON ANY SUCH SERVICE AVAILABLE ON OR THROUGH ANY SUCH WEBSITE/APP OR RESOURCE. WE CANNOT AND DON'T TAKE RESPONSIBILITY FOR THE GATHERING OR USE OF PRIVATE DATA FROM ANY THIRD PARTY. ANY MATERIAL DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE UTILIZATION OF THIS WEBSITE/APP IS COMPLETED AT YOUR OWN DISCRETION AND RISK AND YOU'LL BE SOLELY LIABLE FOR ANY DAMAGE TO YOUR COMPUTING SYSTEM OR LOSS OF KNOWLEDGE THAT RESULTS FROM THE DOWNLOAD OF ANY SUCH MATERIAL. EVERY EFFORT IS FORMED TO STAY THIS WEBSITE/APP UP AND RUNNING SMOOTHLY. HOWEVER, WE TAKE NO RESPONSIBILITY FOR, AND CANNOT BE RESPONSIBLE FOR, THIS WEBSITE/APP BEING TEMPORARILY UNAVAILABLE THANKS TO TECHNICAL ISSUES BEYOND OUR CONTROL.
    </Text>
    <Title style={{textAlign:'justify',marginHorizontal:20}}>
    9. Limitation of Liability

    </Title>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    EXCEPT AS REQUIRED BY PREVAILING LAW, SWOP, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES AND AGENTS WILL NOT BE LIABLE FOR ANY LOSS OF PROFITS, REVENUES, BUSINESS OPPORTUNITIES, GOODWILL, OR ANTICIPATED SAVINGS; LOSS OR CORRUPTION OF DATA OR CONTENT; INDIRECT OR CONSEQUENTIAL LOSS; PUNITIVE DAMAGES CAUSED BY:
    </Text>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    {'\u2B24'}{"  "}ERRORS, MISTAKES, OR INACCURACIES ON THE SERVICE;
    </Text>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    {'\u2B24'}{"  "}PERSONAL INJURY OR PROPERTY DAMAGE RESULTING FROM YOUR USE OF THE SERVICE;

    </Text>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    {'\u2B24'}{"  "}ANY UNAUTHORIZED USE OF THE SERVICE;

    </Text>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    {'\u2B24'}{"  "}ANY INTERRUPTION OR CESSATION OF THE SERVICE;
    </Text>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    {'\u2B24'}{"  "}ANY SERVICE WHETHER DISPLAYED BY SWOP, INCLUDING YOUR USE OF SERVICE; AND/OR
    </Text>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    {'\u2B24'}{"  "}THE REMOVAL OR UNAVAILABILITY OR SUSPENSION OF ANY SERVICE.

    </Text>

    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    {"  "}THIS PROVISION APPLIES TO ANY CLAIM, REGARDLESS OF WHETHER THE CLAIM IS ASSERTED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY.
    </Text>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    {"  "}SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, SO THE ABOVE EXCLUSION MAY NOT APPLY TO YOU. SOME JURISDICTIONS DO NOT ALLOW LIMITATIONS ON HOW LONG AN IMPLIED WARRANTY LASTS, SO THE ABOVE LIMITATION MAY NOT APPLY TO YOU.
    </Text>
    <Title style={{textAlign:'justify',marginHorizontal:20}}>
    10. About Agreement

    </Title>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    These terms constitute the entire agreement between you and SWOP, no other agreement either written or oral exists between the parties, (SWOP)
    </Text>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    If it turns out that a particular term of this Agreement is not enforceable for any reason, this will not affect the rest of the agreement. If you fail to comply with the terms and we do not take action, this action does not waive our right to the action.
    </Text>
    <Text style={{textAlign:'justify',marginHorizontal:20}}>
    In these terms, “include” or “including” means “including but not limited to,” and any examples we give are for illustrative purposes.
    </Text>
    <Title style={{textAlign:'justify',marginHorizontal:20}}>
    11. Governing Law

    </Title>
    <Text style={{textAlign:'justify',marginHorizontal:20,marginBottom:20}}>
    -------------- Law will govern all disputes arising out of or relating to these terms or the Service, regardless of conflict of laws rules. These disputes will be resolved exclusively in the federal or state courts of Santa Clara County, California, USA, and you and SWOP, consent to personal jurisdiction in those courts. If applicable local law prevents these disputes from being resolved in a California court, then you can file these disputes in your local courts.
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
export default Terms

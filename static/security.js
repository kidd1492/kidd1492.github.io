const flashcards = [
    { acronym: 'AAA', definition: 'Authentication Authorization Accounting', ex: 'Ensures secure access control by verifying identity, granting permissions, and tracking user activity.' },
    { acronym: 'VPN', definition: 'Virtual Private Network', ex: 'Creates a secure, encrypted connection over the internet to protect data from unauthorized access.' },
    { acronym: 'AUP', definition: 'Acceptable Use Policy', ex: 'Defines rules for using an organization’s network and resources.' },
    { acronym: 'CIA', definition: 'Confidentiality Integrity Avalability', ex: 'Confidentiality- encryption, access controls, two factor authentication, Integrity- Hashing, digital signatures, certificates, Availability- redundancy fault tolerance, patching' },
    { acronym: 'IPS', definition: 'Intrusion Prevention System', ex: 'Blocks malicious traffic and prevents unauthorized access.' },
    { acronym: 'MFA', definition: 'Multi-Factor Authentication', ex: 'Authentication method requiring multiple verification factors.' },
    { acronym: 'IDS', definition: 'Intrusion Detection System', ex: 'Monitors network traffic for suspicious activity and alerts administrators to potential threats.' },
    { acronym: 'SIEM', definition: 'Security Information and Event Management', ex: 'A solution that aggregates and analyzes security data to detect and respond to threats.' },
    { acronym: 'IRP', definition: 'Incident Response Plan', ex: ' A documented strategy outlining the steps organizations take to detect, respond to, and recover from security incidents or breaches.' },
    { acronym: 'PKI', definition: 'Public Key Infrastructure', ex: 'Framework for managing digital certificates and encryption keys.' },
    { acronym: 'CA', definition: 'Certificate Authority', ex: 'Entity that issues digital certificates for secure communications.' },
    { acronym: 'CSR', definition: 'Certificate Signing Request', ex: 'Request sent to a CA for a digital certificate.' },
    { acronym: 'MIME', definition: 'Multipurpose Internet Mail Extensions', ex: ' expands email capabilities beyond plain text, allowing the inclusion of attachments like graphics, audio, and video' },
    { acronym: 'PKI', definition: 'Public Key Infrastructure', ex: 'A framework for managing digital certificates and encryption keys to secure communications.' },
    { acronym: 'SOC', definition: 'Security Operations Center', ex: 'A centralized team responsible for monitoring and responding to cybersecurity incidents.' },
    { acronym: 'IPS', definition: 'Intrusion Prevention System', ex: 'Actively blocks malicious traffic and prevents unauthorized access to a network.' },
    { acronym: 'VPN', definition: 'Virtual Private Network', ex: 'Creates a secure, encrypted connection over the internet to protect data from unauthorized access.' },
    { acronym: 'SIEM', definition: 'Security Information and Event Management', ex: 'Aggregates and analyzes security data to detect and respond to threats in real time.' },
    { acronym: 'SSH', definition: 'Secure Shell', ex: 'A cryptographic network protocol for secure remote login and command execution.' },
    { acronym: 'SSL', definition: 'Secure Sockets Layer', ex: 'A cryptographic protocol designed to provide secure communication over a computer network.' },
    { acronym: 'ACL', definition: 'Access Control List', ex: 'Defines rules that specify which users or systems are granted or denied access to a particular resource.' },
    { acronym: 'AES', definition: 'Advanced Encryption Standard', ex: 'A widely used encryption algorithm that ensures secure data transmission and storage.' },
    { acronym: 'APT', definition: 'Advanced Persistent Threat', ex: 'A prolonged cyberattack where attackers maintain access to a network.' },
    { acronym: 'TKIP', definition: 'Temporal Key Integrity Protocol', ex: 'A security protocol used in wireless networks to enhance encryption.' },
    { acronym: 'BYOD', definition: 'Bring Your Own Device', ex: 'Policy allowing employees to use personal devices for work.' },
    { acronym: 'BIOS', definition: 'Basic Input/Output System', ex: 'Firmware that initializes hardware during boot-up.' },
    { acronym: 'CCTV', definition: 'Closed-Circuit Television', ex: 'Surveillance system used for monitoring security.' },
    { acronym: 'DLP', definition: 'Data Loss Prevention', ex: 'Security measure that prevents unauthorized data transfers.' },
    { acronym: 'FDE', definition: 'Full Disk Encryption', ex: 'Security measure that encrypts an entire disk.' },
    { acronym: 'DNS', definition: 'Domain Name System', ex: 'Translates domain names into IP addresses.' },
    { acronym: 'ESP', definition: 'Encapsulating Security Payload', ex: 'IPsec protocol that provides encryption and authentication.' },
    { acronym: 'FTP', definition: 'File Transfer Protocol', ex: 'Protocol used for transferring files over a network.' },
    { acronym: 'HTTPS', definition: 'Hypertext Transfer Protocol Secure', ex: 'Secure version of HTTP using encryption.' },
    { acronym: 'VLAN', definition: 'Virtual Local Area Network', ex: 'A network segmentation technique that improves security and efficiency.' },
];


    


const others = [
    { acronym: 'HSM', definition: 'Hardware Security Module', ex: 'Physical device for managing encryption keys.' },
    { acronym: 'DDoS', definition: 'Distributed Denial of Service', ex: 'A cyberattack that overwhelms a system with excessive traffic, causing service disruptions.' },
    { acronym: 'ABAC', definition: 'Attribute-Based Access Control', ex: 'Access control model that evaluates attributes to determine permissions.' },
    { acronym: 'AH', definition: 'Authentication Header', ex: 'Provides integrity and authentication for IPsec packets.' },
    { acronym: 'ARO', definition: 'Annualized Rate of Occurrence', ex: 'Estimates the frequency of a security incident occurring annually.' },
    { acronym: 'ARP', definition: 'Address Resolution Protocol', ex: 'Maps IP addresses to MAC addresses in a network.' },
    { acronym: 'ASLR', definition: 'Address Space Layout Randomization', ex: 'Security technique that randomizes memory locations to prevent exploits.' },
    { acronym: 'AV', definition: 'Antivirus', ex: 'Software designed to detect and remove malicious programs.' },
    { acronym: 'BCP', definition: 'Business Continuity Planning', ex: 'Strategy for maintaining operations during disruptions.' },
    { acronym: 'BIA', definition: 'Business Impact Analysis', ex: 'Assessment of the effects of disruptions on business operations.' },
    { acronym: 'CASB', definition: 'Cloud Access Security Broker', ex: 'Security tool that monitors and enforces cloud application policies.' },
    { acronym: 'CBC', definition: 'Cipher Block Chaining', ex: 'Encryption mode that enhances security by linking blocks.' },
    { acronym: 'CCMP', definition: 'Counter-Mode/CBC-MAC Protocol', ex: 'Encryption protocol used in WPA2 for wireless security.' },
    { acronym: 'CHAP', definition: 'Challenge Handshake Authentication Protocol', ex: 'Authentication method that prevents replay attacks.' },
    { acronym: 'CIRT', definition: 'Computer Incident Response Team', ex: 'Group responsible for handling cybersecurity incidents.' },
    { acronym: 'CIS', definition: 'Center for Internet Security', ex: 'Organization that provides security best practices and benchmarks.' },
    { acronym: 'COOP', definition: 'Continuity of Operations Planning', ex: 'Plan ensuring essential functions continue during emergencies.' },
    { acronym: 'CSIRT', definition: 'Computer Security Incident Response Team', ex: 'Team that responds to cybersecurity threats and incidents.' },
    { acronym: 'CSRF', definition: 'Cross-Site Request Forgery', ex: 'Attack that tricks users into performing unintended actions.' },
    { acronym: 'DAC', definition: 'Discretionary Access Control', ex: 'Access control model where owners set permissions.' },
    { acronym: 'DEP', definition: 'Data Execution Prevention', ex: 'Security feature that prevents execution of malicious code.' },
    { acronym: 'DHCP', definition: 'Dynamic Host Configuration Protocol', ex: 'Protocol that assigns IP addresses dynamically.' },
    { acronym: 'DMZ', definition: 'Demilitarized Zone', ex: 'Network segment that separates internal and external networks.' },
    { acronym: 'EAP', definition: 'Extensible Authentication Protocol', ex: 'Authentication framework used in wireless networks.' },
    { acronym: 'GPO', definition: 'Group Policy Object', ex: 'Windows feature for managing security policies.' },
    { acronym: 'HIDS', definition: 'Host-Based Intrusion Detection System', ex: 'Monitors a system for suspicious activity.' },
    { acronym: 'IAM', definition: 'Identity and Access Management', ex: 'Framework for managing user identities and permissions.' }, 
    { acronym: 'IR', definition: 'Incident Response', ex: 'Process for handling cybersecurity incidents.' },
    { acronym: 'MAC', definition: 'Mandatory Access Control', ex: 'Access control model that enforces strict security policies.' },
    { acronym: 'NAC', definition: 'Network Access Control', ex: 'Security measure that restricts unauthorized network access.' },
    { acronym: 'NIDS', definition: 'Network-Based Intrusion Detection System', ex: 'Monitors network traffic for threats.' },
    { acronym: 'RAID', definition: 'Redundant Array of Independent Disks', ex: 'A data storage virtualization technology that combines multiple physical disk drives for redundancy and performance.' },
    { acronym: 'SAML', definition: 'Security Assertion Markup Language', ex: 'An XML-based framework for exchanging authentication and authorization data between parties.' },
    { acronym: 'SNMP', definition: 'Simple Network Management Protocol', ex: 'A protocol used for monitoring and managing network devices.' },
    { acronym: 'TACACS+', definition: 'Terminal Access Controller Access-Control System Plus', ex: 'A protocol used for authentication, authorization, and accounting in network access control.' },
    { acronym: 'UPS', definition: 'Uninterruptible Power Supply', ex: 'A device that provides emergency power when the main power source fails.' },
    { acronym: 'WPA3', definition: 'Wi-Fi Protected Access 3', ex: 'The latest security protocol for wireless networks, offering stronger encryption and protection against attacks.' },
    { acronym: 'XSS', definition: 'Cross-Site Scripting', ex: 'A security vulnerability that allows attackers to inject malicious scripts into web pages viewed by users.' },
    { acronym: 'Zero Trust', definition: 'Zero Trust Security Model', ex: 'A security concept that assumes no entity should be trusted by default, requiring continuous verification.' },
    { acronym: 'SOC 2', definition: 'Service Organization Control 2', ex: 'A framework for managing customer data based on five trust service criteria: security, availability, processing integrity, confidentiality, and privacy.' },
    { acronym: 'IAM', definition: 'Identity and Access Management', ex: 'A framework for ensuring that the right individuals have access to the right resources at the right times.' },
    { acronym: 'HIDS', definition: 'Host-Based Intrusion Detection System', ex: 'A security system that monitors and analyzes activities on a specific host for signs of malicious behavior.' },
    { acronym: 'NIDS', definition: 'Network-Based Intrusion Detection System', ex: 'A security system that monitors network traffic for suspicious activity.' },
    { acronym: 'FIM', definition: 'File Integrity Monitoring', ex: 'A security process that detects unauthorized changes to files and system configurations.' },
    { acronym: 'EFS', definition: 'Encrypting File System', ex: 'A feature in Windows that provides file-level encryption to protect sensitive data.' }
    
    
    // Add more flashcards here
];

let currentFlashcard = {};
let correct = 0;
let incorrect = 0;

function selectFlashcard() {
    currentFlashcard = flashcards[Math.floor(Math.random() * flashcards.length)];
    document.getElementById('flashcard').textContent = currentFlashcard.acronym;
}

function checkAnswer() {
    const correct_box = document.getElementById('correct');
    const incorrect_box = document.getElementById('incorrect');
    const userResponse = document.getElementById('userInput').value.trim();
    const feedback = document.getElementById('feedback');
    const def = document.getElementById('def');
    const ex = document.getElementById('ex');

    if (userResponse.toLowerCase() === currentFlashcard.definition.toLowerCase()) {
        correct += 1;
        correct_box.textContent = `${correct}`;
        feedback.textContent = "Correct!";
        def.textContent = `${currentFlashcard.definition}`;
        ex.textContent = `${currentFlashcard.ex}`;
    } else {
        incorrect += 1;
        incorrect_box.textContent = `${incorrect}`;
        feedback.textContent = `Incorrect! ${incorrect}`;
        def.textContent = `${currentFlashcard.definition}`;
        ex.textContent = `${currentFlashcard.ex}`;
    }
    // Reset for next round
    setTimeout(() => {
        feedback.textContent = '';
        def.textContent = '';
        ex.textContent = '';
        document.getElementById('userInput').value = '';
        selectFlashcard();
    }, 8000);
}

// Initialize
selectFlashcard();
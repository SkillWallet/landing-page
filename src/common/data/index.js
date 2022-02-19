/* ------------------------------------ */
// Navbar data section
/* ------------------------------------ */
import LogoImageStick from "common/assets/image/header-logo.svg";

const MENU_ITEMS = [
  {
    label: "About",
    path: "#about_section",
    offset: "70",
  },
  {
    label: "Newsletter",
    path: "#newsletter_section",
    offset: "70",
  },
  {
    label: "For DAOS",
    path: "#daos_section",
    offset: "70",
  },
  {
    label: "For Members",
    path: "#members_section",
    offset: "70",
  },
];

export const NavabarData = {
  logo: LogoImageStick,
  navItems: MENU_ITEMS,
  button: {
    link: "https://discord.com/invite/aXJFGgcvUk",
    text: "COMMUNITY",
  },
};

/* ------------------------------------ */
// Banner data section
/* ------------------------------------ */
import bannerMoc from "common/assets/image/main.svg";
import timerIcon from "common/assets/image/timer.svg";

const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
const today = new Date();
const launchDate = new Date();
launchDate.setDate(9);
launchDate.setMonth(2);

const diffDays = Math.round(Math.abs((today - launchDate) / oneDay));

export const BannerData = {
  image: bannerMoc,
  logo: LogoImageStick,
  title: "Do more with your DAO",
  paragraphs: [
    "SkillWallets are NFT IDs that unlock",
    "the true power of Web3 Communities.",
  ],
  marqueeText: "Identity Olympics - Opening Ceremony on March, 8",
  buttonLeft: {
    link: "https://discord.gg/aXJFGgcvUk",
    text: "Community",
  },
  buttonRight: {
    link: "https://playground.skillwallet.id",
    text: "PLAYGROUND (TESTNET)",
  },
  competitionStart: {
    title: "The Future of Identity - Olympics",
    date: `Starting in ${diffDays} Days `,
    timerIcon,
  },
  stats: [
    {
      num: null,
      name: "SkillWallets",
    },
    {
      num: null,
      name: "DAOs",
    },
    {
      num: null,
      name: "Interactions",
    },
  ],
};

/* ------------------------------------ */
// ABOUT data section
/* ------------------------------------ */
import AboutBackgroundImage from "common/assets/image/large-logo.png";
import personLogo from "common/assets/image/person-icon.png";
export const AboutData = {
  title: "Learn more about SkillWallet",
  description:
    "SkillWallet is a self-sovereign, portable ID based on Skills & Contributions – that unlocks native, role-based Governance for Web3 Communities. Users can immediately prove their Skills & Reputation cross-platform and cross-community – while DAOs can track real human interactions directly on-chain, to evaluate the health and growth of the community.",
  rightImage: AboutBackgroundImage,
  personLogo: personLogo,
  button: {
    link: "https://docs.skillwallet.id/",
    text: "READ MORE",
  },
};

/* ------------------------------------ */
// VALUES data section
/* ------------------------------------ */
export const ValuesData = {
  items: [
    {
      title: "Values",
      text: "Role-based, Meritocratic Governance.",
    },
    {
      text: "Pseudonymous & Permissionless Membership.",
    },
    {
      text: "Self-sustainability & Collective Autonomy.",
    },
  ],
};

/* ------------------------------------ */
// NewsLetter data section
/* ------------------------------------ */
export const NewsLetterData = {
  title: "Identity Olympics - Newsletter",
  description:
    "12 Competitions, 12 Skills - 90 winners to be selected to join SkillWallet DAO and win incredible rewards. Sign up to our Newsletter to be the first one to read, follow, and be part of the very first Identity Olympics. A Dodecathlon of 12 events, in a celebration of personal freedom, talent, and individual skills. Be on the frontline to build the future of Identity. Together.",
  mailchimpUrl:
    "https://skillwallet.us20.list-manage.com/subscribe/post?u=d961a0504e2d77cc544c89c33&amp;id=0599e9c37b",
};

/* ------------------------------------ */
// DAOS data section
/* ------------------------------------ */
import daoImage1 from "common/assets/image/native.png";
import daoImage2 from "common/assets/image/on-chain.png";
import daoImage3 from "common/assets/image/role-based.png";

export const ForDaosData = [
  {
    id: 1,
    image: daoImage1,
    imageTitle: "Role-Based Membership & Native Governance",
    title: "Role-Based Membership & Native Governance",
    descriptions: [
      "SkillWallet is a Role-Based Membership system. Choose your Market, create Roles for your DAO Members, and add the Contracts you want to track. Members will then be able to inject any existing Wallet, and pick their Role in the Community.",
      "As a final step, they'll select their Commitment level - that applies Quadratic Functions & a Reputation Score to unlock infinite possibilities for native Governance in your DAO.",
    ],
    button: {
      link: "https://playground.skillwallet.id",
      text: "PLAYGROUND (TESTNET)",
    },
  },
  {
    id: 2,
    image: daoImage2,
    imageTitle: "Sybil-Resistance & Proof of Contribution",
    title: "Integrate the SkillWallet",
    descriptions: [
      "Each SkillWallet's PrivKey is tied to a mobile device, while only the PubKey stays on-chain. Since this is still open to certain types of collusion - we implemented a brand-new Proof of Contribution algorithm, that automatically combines individual's commitment with their actual amount of Contributions (Contract Interactions).",
      "This way, you can build healthier communities, made of real individuals.",
    ],
    button: {
      link: "https://playground.skillwallet.id",
      text: "PLAYGROUND (TESTNET)",
    },
  },
  {
    id: 3,
    image: daoImage3,
    imageTitle: "On-Chain Analytics & Value Allocation",
    title: "Integrate the SkillWallet",
    descriptions: [
      "Our Analytics have been designed for our Partners to turn their DAO in a self-sustainable community - that tracks health metrics such as Growth & Member's Activity. SkillWallet holders' interactions are tracked on-chain and filtered through your Contracts.",
      "Not only this shows you what Members & Roles are really participating, but lets you measure the value of their contribution. And allocate value & rewards accordingly.",
    ],
    button: {
      link: "https://playground.skillwallet.id",
      text: "PLAYGROUND (TESTNET)",
    },
  },
];

/* ------------------------------------ */
// MEMBERS data section
/* ------------------------------------ */
export const ForMembersData = {
  title: "Claim your SkillWallet",
  description: "For Members",
  items: [
    {
      id: 1,
      title: "OWN YOUR OWN IDENTITY",
      descriptions: [
        "SkillWallet is an NFT ID, which makes it the first Identity you can truly own. An ID that doesn't depend on a service provider. You own it, you're responsible for it, and it moves with you, wherever you go.",
        "Join a Community, claim your SkillWallet - and become <b>a citizen of the Metaverse</b>.",
      ],
    },
    {
      id: 2,
      title: "PORTABLE PROOF OF MEMBERSHIP",
      descriptions: [
        "A SkillWallet is a <b>Role-based ID</b> that combines Identity & DAO Governance. By holding it, you're always member of a Community, with a direct gateway to the Collaborative Economy.",
        "Choose the DAOs you really believe in, take your Role in them, and <b>earn for the Skills & Contributions you provide</b>.",
      ],
    },
    {
      id: 3,
      title: "THE REPUTATION LAYER OF WEB3",
      descriptions: [
        "Our time is limited, and so are the DAOs we can truly add value to. That's why your NFT ID has a built-in, finite <b>Commitment level</b>, that you select each time you join a new Community.",
        "You literally stake your Reputation, and <b>grow the value of your DAO</b>, whatever Community you are part of.",
      ],
    },
  ],
  button: {
    link: "https://discord.gg/aXJFGgcvUk",
    text: "Join our community",
  },
};

/* ------------------------------------ */
// HOWITWORKS data section
/* ------------------------------------ */
import distTownLogo from "common/assets/image/dist_town.svg";
import partnersLogo from "common/assets/image/partners.svg";
import bubblesImage from "common/assets/image/bubbles.png";
export const HowItWorksData = {
  title: "How it works",
  descriptionTitle: "A WEB3-NATIVE, MODULAR SYSTEM",
  descriptions: [
    "The SkillWallet combines a novel standard for [1] up- gradable, Non-Transferable (Identity) NFTs (U-NT-NFT), [2] On-Chain Analytics, and [3] an effi- cient, QR-based off-chain signature mechanism. We rely on a fully decentralized, modular infrastructure – built with the most reliable, innovative protocols in the Web3 space.",
    "Our smart contract suite is entirely deployed on the Polygon Network – and it uses External Adapters (Chainlink + Covalent) to verify membership, and peer-to-contract interactions in real time. Once veri- fied, new SkillWallet IDs can create new tasks, and move across communities seamlessly - without losing the Credits & reputation earned. De-facto, this allows the first, truly global, on-chain citizenship.",
  ],
  partners: {
    icon: partnersLogo,
  },
  poweredBy: {
    text: "Powered by DistributedTown",
    icon: distTownLogo,
  },

  bottom: {
    title: "Designed, Built & Refined with DAOs, for DAOs.",
    descriptionTitle: "A WEB3-NATIVE, MODULAR SYSTEM",
    description:
      "The SkillWallet combines a novel standard for [1] up- gradable, Non-Transferable (Identity) NFTs (U-NT-NFT), [2] On-Chain Analytics, and [3] an effi- cient, QR-based off-chain signature mechanism. We rely on a fully decentralized, modular infrastructure – built with the most reliable, innovative protocols in the Web3 space.",
    image: bubblesImage,
  },
};

/* ------------------------------------ */
// ROADMAP data section
/* ------------------------------------ */
export const RoadmapData = {
  title: "Milestones",
  mainDescription: "Roadmap",
  roadmapItems: {
    pastActions: [
      {
        id: 1,
        title: "Q4 2020",
        description: "Governance Design & Solution Analysis",
      },
      {
        id: 2,
        title: "Q1 2021",
        description: "Product Design & Smart Contract Suite",
      },
      {
        id: 3,
        title: "Q2 2021",
        description: "Offchain Signature & Modular Architecture",
      },
      {
        id: 4,
        title: "Q3 2021",
        description: "Tachyon Accelerator & Role-Based Governance",
      },
    ],
    futureAtions: [
      {
        id: 5,
        isComplete: false,
        isCurrent: true,
        title: "Q4 2021",
        description: "Successful Fundraising & Alpha Testing",
      },
      {
        id: 6,
        isCurrent: false,
        isComplete: false,
        title: "Q4 2021",
        description: "Public launch & Distributed Hackathon",
      },
      {
        id: 7,
        isCurrent: false,
        isComplete: false,
        title: "Q1 2022",
        description: "Meta Olympics, 12 competitions, 300k rewards",
      },
      {
        id: 8,
        isComplete: false,
        isCurrent: false,
        title: "Q2&Q3 2022",
        description: "Human-liquidity token & Profit-Sharing network",
      },
    ],
  },
};

/* ------------------------------------ */
// FOOTER data section
/* ------------------------------------ */
import footerLogo from "common/assets/image/logo-footer.svg";
import footerDiscord from "common/assets/image/discord-social.svg";
import footerGithub from "common/assets/image/github-social.svg";
import footerTwitter from "common/assets/image/twitter-social.svg";
import footerMedium from "common/assets/image/medium-social.svg";

export const FooterData = {
  menu: [],
  logo: footerLogo,
  copyright: `Copyright © ${new Date().getFullYear()}, SkillWallet.`,
  social: [
    {
      link: "https://discord.gg/jntyjSvFZd",
      icon: footerDiscord,
    },
    {
      link: "https://github.com/SkillWallet",
      icon: footerGithub,
    },
    {
      link: "https://twitter.com/SkillWalletID",
      icon: footerTwitter,
    },
    {
      link: "https://blog.skillwallet.id",
      icon: footerMedium,
    },
  ],
};

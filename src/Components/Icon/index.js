function MessageIcon({ width = '2.6rem', height = '2.6rem', className }) {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.17877 7.17357C2.50304 6.45894 3.21528 6 4.00003 6H44C44.713 6 45.372 6.37952 45.7299 6.99615C46.0877 7.61278 46.0902 8.37327 45.7365 8.99228L25.7365 43.9923C25.3423 44.6821 24.5772 45.0732 23.7872 44.9886C22.9972 44.9041 22.3321 44.3599 22.0929 43.6023L16.219 25.0017L2.49488 9.31701C1.97811 8.72642 1.85449 7.88819 2.17877 7.17357ZM20.377 24.8856L24.531 38.0397L40.5537 10H8.40757L18.3918 21.4106L30.1002 14.2054C30.5705 13.9159 31.1865 14.0626 31.4759 14.533L32.5241 16.2363C32.8136 16.7066 32.6669 17.3226 32.1966 17.612L20.377 24.8856Z"
            ></path>
        </svg>
    );
}
function InboxIcon({ width = '3.2rem', height = '3.2rem', className }) {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 32 32"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.0362 21.3333H18.5243L15.9983 24.4208L13.4721 21.3333H7.96047L7.99557 8H24.0009L24.0362 21.3333ZM24.3705 23.3333H19.4721L17.2883 26.0026C16.6215 26.8176 15.3753 26.8176 14.7084 26.0026L12.5243 23.3333H7.62626C6.70407 23.3333 5.95717 22.5845 5.9596 21.6623L5.99646 7.66228C5.99887 6.74352 6.74435 6 7.66312 6H24.3333C25.2521 6 25.9975 6.7435 26 7.66224L26.0371 21.6622C26.0396 22.5844 25.2927 23.3333 24.3705 23.3333ZM12.6647 14C12.2965 14 11.998 14.2985 11.998 14.6667V15.3333C11.998 15.7015 12.2965 16 12.6647 16H19.3313C19.6995 16 19.998 15.7015 19.998 15.3333V14.6667C19.998 14.2985 19.6995 14 19.3313 14H12.6647Z"
            ></path>
        </svg>
    );
}
function ProfileIcon({ width = '2rem', height = '2rem', className }) {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.0003 7C20.1343 7 17.0003 10.134 17.0003 14C17.0003 17.866 20.1343 21 24.0003 21C27.8663 21 31.0003 17.866 31.0003 14C31.0003 10.134 27.8663 7 24.0003 7ZM13.0003 14C13.0003 7.92487 17.9252 3 24.0003 3C30.0755 3 35.0003 7.92487 35.0003 14C35.0003 20.0751 30.0755 25 24.0003 25C17.9252 25 13.0003 20.0751 13.0003 14ZM24.0003 33C18.0615 33 13.0493 36.9841 11.4972 42.4262C11.3457 42.9573 10.8217 43.3088 10.2804 43.1989L8.32038 42.8011C7.77914 42.6912 7.4266 42.1618 7.5683 41.628C9.49821 34.358 16.1215 29 24.0003 29C31.8792 29 38.5025 34.358 40.4324 41.628C40.5741 42.1618 40.2215 42.6912 39.6803 42.8011L37.7203 43.1989C37.179 43.3088 36.6549 42.9573 36.5035 42.4262C34.9514 36.9841 29.9391 33 24.0003 33Z"
            ></path>
        </svg>
    );
}

function CoinIcon({ width = '2rem', height = '2rem', className }) {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.0002 2.49992C5.85803 2.49992 2.50016 5.85778 2.50016 9.99992C2.50016 14.1421 5.85803 17.4999 10.0002 17.4999C14.1423 17.4999 17.5002 14.1421 17.5002 9.99992C17.5002 5.85778 14.1423 2.49992 10.0002 2.49992ZM0.833496 9.99992C0.833496 4.93731 4.93755 0.833252 10.0002 0.833252C15.0628 0.833252 19.1668 4.93731 19.1668 9.99992C19.1668 15.0625 15.0628 19.1666 10.0002 19.1666C4.93755 19.1666 0.833496 15.0625 0.833496 9.99992Z"
            ></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.141 4.99992C12.141 6.27424 13.2115 7.3484 14.5835 7.3484V9.01507C13.6736 9.01507 12.8267 8.72389 12.141 8.22854V11.4961C12.141 13.2238 10.7059 14.5833 8.98723 14.5833C7.26852 14.5833 5.8335 13.2238 5.8335 11.4961C5.8335 9.76845 7.26852 8.40901 8.98723 8.40901V10.0757C8.1429 10.0757 7.50016 10.7343 7.50016 11.4961C7.50016 12.2579 8.1429 12.9166 8.98723 12.9166C9.83156 12.9166 10.4743 12.2579 10.4743 11.4961V4.99992H12.141Z"
            ></path>
        </svg>
    );
}

function SettingIcon({ width = '2rem', height = '2rem', className }) {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 48 48"
            fillRule="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.375 44.2391C21.375 44.6593 21.7157 45 22.1359 45H25.8641C26.2843 45 26.625 44.6593 26.625 44.2391V41.3044C29.4979 40.8723 32.1421 39.7417 34.3792 38.0912L36.4554 40.1674C36.7525 40.4646 37.2343 40.4646 37.5314 40.1674L40.1677 37.5311C40.4648 37.234 40.4648 36.7522 40.1677 36.4551L38.0915 34.3789C39.7419 32.1418 40.8723 29.4978 41.3044 26.625H44.2391C44.6593 26.625 45 26.2843 45 25.8641V22.1359C45 21.7157 44.6593 21.375 44.2391 21.375H41.3044C40.8723 18.5021 39.7418 15.858 38.0913 13.6209L40.1673 11.5449C40.4644 11.2478 40.4644 10.766 40.1673 10.4689L37.531 7.83262C37.2339 7.53548 36.7521 7.53548 36.455 7.83262L34.379 9.90863C32.1419 8.25818 29.4978 7.1277 26.625 6.69556V3.76087C26.625 3.34065 26.2843 3 25.8641 3H22.1359C21.7156 3 21.375 3.34065 21.375 3.76087V6.69556C18.5022 7.1277 15.8582 8.25815 13.6211 9.90854L11.5452 7.83265C11.2481 7.53551 10.7664 7.53551 10.4692 7.83265L7.83294 10.4689C7.5358 10.7661 7.5358 11.2478 7.83294 11.545L9.90878 13.6208C8.25826 15.8579 7.12772 18.5021 6.69556 21.375H3.76087C3.34065 21.375 3 21.7157 3 22.1359V25.8641C3 26.2843 3.34065 26.625 3.76087 26.625H6.69556C7.1277 29.4978 8.25819 32.1419 9.90863 34.379L7.83255 36.4551C7.53541 36.7522 7.53541 37.234 7.83255 37.5311L10.4688 40.1674C10.766 40.4645 11.2477 40.4645 11.5449 40.1674L13.6209 38.0913C15.858 39.7418 18.5021 40.8723 21.375 41.3044V44.2391ZM24 38C31.732 38 38 31.732 38 24C38 16.268 31.732 10 24 10C16.268 10 10 16.268 10 24C10 31.732 16.268 38 24 38Z"
            ></path>
        </svg>
    );
}

function LanguageIcon({ width = '2rem', height = '2rem', className }) {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 2C7.68629 2 5 4.68629 5 8V40C5 43.3137 7.68629 46 11 46H37C40.3137 46 43 43.3137 43 40V8C43 4.68629 40.3137 2 37 2H11ZM9 8C9 6.89543 9.89543 6 11 6H37C38.1046 6 39 6.89543 39 8V40C39 41.1046 38.1046 42 37 42H11C9.89543 42 9 41.1046 9 40V8ZM26.063 14.1175C25.7306 13.4415 25.0465 13.0096 24.2933 13.0002C23.54 12.9907 22.8453 13.4054 22.4961 14.0729L15.6945 27.0746L12.4672 33.1814C12.2092 33.6697 12.3958 34.2747 12.8841 34.5328L14.6524 35.4672C15.1407 35.7253 15.7457 35.5386 16.0038 35.0503L18.6718 30.0017H29.4421L32.0324 35.0274C32.2854 35.5183 32.8885 35.7112 33.3794 35.4581L35.1572 34.5419C35.6481 34.2888 35.8409 33.6858 35.5879 33.1948L32.4477 27.1022L26.063 14.1175ZM27.4492 26.0017H20.77L24.213 19.4202L27.4492 26.0017Z"
            ></path>
        </svg>
    );
}

function FeedbackIcon({ width = '2rem', height = '2rem', className }) {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6ZM2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24ZM24.0909 15C22.172 15 20.3433 16.2292 19.2617 18.61C19.0332 19.1128 18.4726 19.4 17.9487 19.2253L16.0513 18.5929C15.5274 18.4182 15.2406 17.8497 15.4542 17.3405C16.9801 13.7031 20.0581 11 24.0909 11C28.459 11 32 14.541 32 18.9091C32 21.2138 30.7884 23.4606 29.2167 25.074C27.8157 26.5121 25.5807 27.702 22.9988 27.9518C22.4491 28.0049 22.0001 27.5523 22.0001 27V25C22.0001 24.4477 22.4504 24.0057 22.9955 23.9167C24.2296 23.7153 25.5034 23.1533 26.3515 22.2828C27.4389 21.1666 28 19.8679 28 18.9091C28 16.7502 26.2498 15 24.0909 15ZM24 36C22.3431 36 21 34.6569 21 33C21 31.3431 22.3431 30 24 30C25.6569 30 27 31.3431 27 33C27 34.6569 25.6569 36 24 36Z"
            ></path>
        </svg>
    );
}

function KeyboardIcon({ width = '2rem', height = '2rem', className }) {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 24C6 14.0589 14.0589 6 24 6C33.9411 6 42 14.0589 42 24C42 33.9411 33.9411 42 24 42C14.0589 42 6 33.9411 6 24ZM24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2ZM15 14C14.4477 14 14 14.4477 14 15V17C14 17.5523 14.4477 18 15 18H17C17.5523 18 18 17.5523 18 17V15C18 14.4477 17.5523 14 17 14H15ZM14 31C14 30.4477 14.4477 30 15 30H33C33.5523 30 34 30.4477 34 31V33C34 33.5523 33.5523 34 33 34H15C14.4477 34 14 33.5523 14 33V31ZM15 22C14.4477 22 14 22.4477 14 23V25C14 25.5523 14.4477 26 15 26H17C17.5523 26 18 25.5523 18 25V23C18 22.4477 17.5523 22 17 22H15ZM22 15C22 14.4477 22.4477 14 23 14H25C25.5523 14 26 14.4477 26 15V17C26 17.5523 25.5523 18 25 18H23C22.4477 18 22 17.5523 22 17V15ZM23 22C22.4477 22 22 22.4477 22 23V25C22 25.5523 22.4477 26 23 26H25C25.5523 26 26 25.5523 26 25V23C26 22.4477 25.5523 22 25 22H23ZM30 15C30 14.4477 30.4477 14 31 14H33C33.5523 14 34 14.4477 34 15V17C34 17.5523 33.5523 18 33 18H31C30.4477 18 30 17.5523 30 17V15ZM31 22C30.4477 22 30 22.4477 30 23V25C30 25.5523 30.4477 26 31 26H33C33.5523 26 34 25.5523 34 25V23C34 22.4477 33.5523 22 33 22H31Z"
            ></path>
        </svg>
    );
}

function LogoutIcon({ width = '2rem', height = '2rem', className }) {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.1716 26L7 26C6.44771 26 6 25.5523 6 25L6 23C6 22.4477 6.44771 22 7 22L24.1716 22L20.2929 18.1213C19.9024 17.7308 19.9024 17.0976 20.2929 16.7071L21.7071 15.2929C22.0976 14.9024 22.7308 14.9024 23.1213 15.2929L30.4142 22.5858C31.1953 23.3668 31.1953 24.6332 30.4142 25.4142L23.1213 32.7071C22.7308 33.0976 22.0976 33.0976 21.7071 32.7071L20.2929 31.2929C19.9024 30.9024 19.9024 30.2692 20.2929 29.8787L24.1716 26ZM36 43L27 43C26.4477 43 26 42.5523 26 42L26 40C26 39.4477 26.4477 39 27 39L36 39C37.1046 39 38 38.1046 38 37L38 11C38 9.89543 37.1046 9 36 9L27 9C26.4477 9 26 8.55228 26 8L26 6C26 5.44771 26.4477 5 27 5L36 5C39.3137 5 42 7.68629 42 11L42 37C42 40.3137 39.3137 43 36 43Z"
            ></path>
        </svg>
    );
}
function HomeIcon({ width = '3.2rem', height = '3.2rem', className }) {
    return (
        <svg width={width} height={height} viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.9505 7.84001C24.3975 7.38666 23.6014 7.38666 23.0485 7.84003L6.94846 21.04C6.45839 21.4418 6.2737 22.1083 6.48706 22.705C6.70041 23.3017 7.26576 23.7 7.89949 23.7H10.2311L11.4232 36.7278C11.5409 38.0149 12.6203 39 13.9128 39H21.5C22.0523 39 22.5 38.5523 22.5 38V28.3153C22.5 27.763 22.9477 27.3153 23.5 27.3153H24.5C25.0523 27.3153 25.5 27.763 25.5 28.3153V38C25.5 38.5523 25.9477 39 26.5 39H34.0874C35.3798 39 36.4592 38.0149 36.577 36.7278L37.7691 23.7H40.1001C40.7338 23.7 41.2992 23.3017 41.5125 22.705C41.7259 22.1082 41.5412 21.4418 41.0511 21.04L24.9505 7.84001Z"
            ></path>
        </svg>
    );
}

function FollowIcon({ width = '3.2rem', height = '3.2rem', className }) {
    return (
        <svg width={width} height={height} viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 12.5C15.5897 12.5 13.5849 14.5018 13.5849 17.0345C13.5849 19.5672 15.5897 21.569 18 21.569C20.4103 21.569 22.4151 19.5672 22.4151 17.0345C22.4151 14.5018 20.4103 12.5 18 12.5ZM10.5849 17.0345C10.5849 12.9017 13.8766 9.5 18 9.5C22.1234 9.5 25.4151 12.9017 25.4151 17.0345C25.4151 21.1673 22.1234 24.569 18 24.569C13.8766 24.569 10.5849 21.1673 10.5849 17.0345ZM18 29.8793C14.0801 29.8793 10.7403 32.5616 9.69697 36.2673C9.5473 36.7989 9.03833 37.1708 8.49337 37.0811L7.50662 36.9189C6.96166 36.8292 6.58837 36.3131 6.72325 35.7776C8.00732 30.6788 12.5509 26.8793 18 26.8793C23.449 26.8793 27.9927 30.6788 29.2767 35.7776C29.4116 36.3131 29.0383 36.8292 28.4934 36.9189L27.5066 37.0811C26.9617 37.1708 26.4527 36.7989 26.303 36.2673C25.2597 32.5616 21.9199 29.8793 18 29.8793Z"
            ></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M33 31.5371C32.2445 31.5371 31.5198 31.668 30.8447 31.9093C30.3246 32.0951 29.7189 31.9243 29.4549 31.4392L28.9769 30.5608C28.713 30.0757 28.8907 29.463 29.4009 29.2516C30.513 28.791 31.7285 28.5371 33 28.5371C37.4554 28.5371 41.1594 31.6303 42.2706 35.7812C42.4135 36.3147 42.0386 36.8308 41.4935 36.9196L40.5065 37.0804C39.9614 37.1692 39.4546 36.7956 39.2894 36.2686C38.4217 33.5 35.91 31.5371 33 31.5371Z"
            ></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M33 18.5C31.6193 18.5 30.5 19.6193 30.5 21C30.5 22.3807 31.6193 23.5 33 23.5C34.3807 23.5 35.5 22.3807 35.5 21C35.5 19.6193 34.3807 18.5 33 18.5ZM27.5 21C27.5 17.9624 29.9624 15.5 33 15.5C36.0376 15.5 38.5 17.9624 38.5 21C38.5 24.0376 36.0376 26.5 33 26.5C29.9624 26.5 27.5 24.0376 27.5 21Z"
            ></path>
        </svg>
    );
}

function LiveIcon({ width = '3.2rem', height = '3.2rem', className }) {
    return (
        <svg width={width} height={height} viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.78511 10.3334C6.95518 10.3334 6.33301 10.9792 6.33301 11.7143V20.2858C6.33301 21.0209 6.95518 21.6667 7.78511 21.6667H18.5744C19.4043 21.6667 20.0265 21.0209 20.0265 20.2858V17.5602C20.0265 17.1826 20.2392 16.8372 20.5763 16.6672C20.9135 16.4973 21.3177 16.5317 21.6212 16.7563L25.6663 19.7488V12.2513L21.6212 15.2439C21.3177 15.4684 20.9135 15.5029 20.5763 15.3329C20.2392 15.1629 20.0265 14.8175 20.0265 14.4399V11.7143C20.0265 10.9792 19.4043 10.3334 18.5744 10.3334H7.78511ZM25.6855 12.2371C25.6831 12.2388 25.6839 12.2383 25.6839 12.2383L25.6855 12.2371ZM25.6716 12.2177C25.673 12.2212 25.6746 12.2243 25.6763 12.2269C25.6798 12.2324 25.6834 12.2355 25.6855 12.2371L25.6874 12.2383C25.6874 12.2383 25.6865 12.238 25.6839 12.2383M4.33301 11.7143C4.33301 9.81952 5.90653 8.33337 7.78511 8.33337H18.5744C20.453 8.33337 22.0265 9.81953 22.0265 11.7143V12.4562L24.4963 10.629C25.0929 10.1877 25.8879 10.1155 26.5542 10.4359C27.224 10.758 27.6663 11.4325 27.6663 12.1905V19.8096C27.6663 20.5676 27.224 21.2421 26.5542 21.5642C25.888 21.8846 25.0929 21.8124 24.4963 21.371L22.0265 19.5439V20.2858C22.0265 22.1806 20.453 23.6667 18.5744 23.6667H7.78511C5.90653 23.6667 4.33301 22.1806 4.33301 20.2858V11.7143Z"
            ></path>
            <path d="M15 15.134C15.6667 15.5189 15.6667 16.4811 15 16.866L12 18.5981C11.3333 18.983 10.5 18.5019 10.5 17.7321L10.5 14.2679C10.5 13.4981 11.3333 13.017 12 13.4019L15 15.134Z"></path>
        </svg>
    );
}

function QrIcon({ width = '2rem', height = '2rem', className }) {
    return (
        <svg width={width} height={height} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 6C6.89543 6 6 6.89543 6 8V21C6 22.1046 6.89543 23 8 23H21C22.1046 23 23 22.1046 23 21V8C23 6.89543 22.1046 6 21 6H8ZM10 19V10H19V19H10ZM28 6C26.8954 6 26 6.89543 26 8V21C26 22.1046 26.8954 23 28 23H41C42.1046 23 43 22.1046 43 21V8C43 6.89543 42.1046 6 41 6H28ZM30 19V10H39V19H30ZM8 26C6.89543 26 6 26.8954 6 28V41C6 42.1046 6.89543 43 8 43H21C22.1046 43 23 42.1046 23 41V28C23 26.8954 22.1046 26 21 26H8ZM10 39V30H19V39H10ZM26 42C26 42.5523 26.4477 43 27 43H29C29.5523 43 30 42.5523 30 42V27C30 26.4477 29.5523 26 29 26H27C26.4477 26 26 26.4477 26 27V42ZM32.5 42C32.5 42.5523 32.9477 43 33.5 43H35.5C36.0523 43 36.5 42.5523 36.5 42V27C36.5 26.4477 36.0523 26 35.5 26H33.5C32.9477 26 32.5 26.4477 32.5 27V42ZM40 43C39.4477 43 39 42.5523 39 42V27C39 26.4477 39.4477 26 40 26H42C42.5523 26 43 26.4477 43 27V42C43 42.5523 42.5523 43 42 43H40Z"
            ></path>
        </svg>
    );
}

function FbIcon({ width = '2rem', height = '2rem', className }) {
    return (
        <svg width={width} height={height} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M24 47C36.7025 47 47 36.7025 47 24C47 11.2975 36.7025 1 24 1C11.2975 1 1 11.2975 1 24C1 36.7025 11.2975 47 24 47Z"
                fill="white"
            ></path>
            <path
                d="M24 1C11.2964 1 1 11.2964 1 24C1 35.4775 9.40298 44.9804 20.3846 46.7205L20.3936 30.6629H14.5151V24.009H20.3936C20.3936 24.009 20.3665 20.2223 20.3936 18.5363C20.4206 16.8503 20.7542 15.2274 21.6288 13.7487C22.9722 11.4586 25.0639 10.3407 27.6335 10.0251C29.7432 9.76362 31.826 10.0521 33.9087 10.3407C34.0529 10.3587 34.125 10.3767 34.2693 10.4038C34.2693 10.4038 34.2783 10.6472 34.2693 10.8005C34.2603 12.4053 34.2693 16.0839 34.2693 16.0839C33.2685 16.0659 31.6096 15.9667 30.5096 16.138C28.6884 16.4175 27.6425 17.5806 27.6064 19.4108C27.5704 20.8354 27.5884 24.009 27.5884 24.009H33.9988L32.962 30.6629H27.5974V46.7205C38.597 44.9984 47.009 35.4775 47.009 24C47 11.2964 36.7036 1 24 1Z"
                fill="#0075FA"
            ></path>
        </svg>
    );
}

function GoogleIcon({ width = '2rem', height = '2rem', className }) {
    return (
        <svg width={width} height={height} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M43 24.4313C43 23.084 42.8767 21.7885 42.6475 20.5449H24.3877V27.8945H34.8219C34.3724 30.2695 33.0065 32.2818 30.9532 33.6291V38.3964H37.2189C40.885 35.0886 43 30.2177 43 24.4313Z"
                fill="#4285F4"
            ></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.3872 43.001C29.6219 43.001 34.0107 41.2996 37.2184 38.3978L30.9527 33.6305C29.2165 34.7705 26.9958 35.4441 24.3872 35.4441C19.3375 35.4441 15.0633 32.1018 13.5388 27.6108H7.06152V32.5337C10.2517 38.7433 16.8082 43.001 24.3872 43.001Z"
                fill="#34A853"
            ></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.5395 27.6094C13.1516 26.4695 12.9313 25.2517 12.9313 23.9994C12.9313 22.7472 13.1516 21.5295 13.5395 20.3894V15.4668H7.06217C5.74911 18.0318 5 20.9336 5 23.9994C5 27.0654 5.74911 29.9673 7.06217 32.5323L13.5395 27.6094Z"
                fill="#FBBC04"
            ></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.3872 12.5568C27.2336 12.5568 29.7894 13.5155 31.7987 15.3982L37.3595 9.94866C34.0018 6.88281 29.6131 5 24.3872 5C16.8082 5 10.2517 9.25777 7.06152 15.4674L13.5388 20.39C15.0633 15.8991 19.3375 12.5568 24.3872 12.5568Z"
                fill="#EA4335"
            ></path>
        </svg>
    );
}

function TwitterIcon({ width = '2rem', height = '2rem', className }) {
    return (
        <svg width={width} height={height} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M43.8044 6.79902C42.5841 7.62363 39.7822 8.82191 38.4004 8.82191V8.82437C36.8226 7.08554 34.6013 6 32.1377 6C27.353 6 23.4731 10.093 23.4731 15.1387C23.4731 15.8398 23.5501 16.5236 23.6925 17.1793H23.6911C17.2007 16.9996 10.1022 13.5678 5.82893 7.69403C3.2016 12.4916 5.4752 17.8272 8.45673 19.7713C7.43613 19.8526 5.55733 19.6473 4.673 18.737C4.61373 21.9212 6.06507 26.1403 11.3571 27.6709C10.3379 28.2494 8.53373 28.0834 7.74926 27.9604C8.0246 30.6484 11.5927 34.1625 15.4945 34.1625C14.1039 35.8594 8.8716 38.9374 3 37.9582C6.98767 40.5177 11.6352 42 16.5543 42C30.5333 42 41.3894 30.0482 40.8051 15.3041C40.8028 15.2879 40.8028 15.2716 40.8014 15.2539C40.8028 15.216 40.8051 15.1781 40.8051 15.1387C40.8051 15.0929 40.8014 15.0496 40.8 15.0053C42.0726 14.0871 43.7801 12.463 45 10.3254C44.2925 10.7365 42.1701 11.5596 40.1952 11.7639C41.4627 11.0422 43.3405 8.67865 43.8044 6.79902Z"
                fill="#1DA1F2"
            ></path>
        </svg>
    );
}

function lineIcon({ width = '2rem', height = '2rem', className }) {
    return (
        <svg width={width} height={height} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 47.001C36.7026 47.001 47 36.7035 47 24.001C47 11.2984 36.7026 1.00098 24 1.00098C11.2975 1.00098 1 11.2984 1 24.001C1 36.7035 11.2975 47.001 24 47.001Z"
                fill="#00B900"
            ></path>
            <path
                d="M40.0001 22.4324C40.0001 15.2729 32.8228 9.44822 23.9999 9.44822C15.1782 9.44822 8 15.2729 8 22.4324C8 28.8509 13.6922 34.2263 21.3811 35.2427C21.9022 35.355 22.6114 35.5863 22.7908 36.0316C22.9522 36.4362 22.8963 37.0699 22.8423 37.4784C22.8423 37.4784 22.6546 38.6075 22.6141 38.848C22.5445 39.2525 22.2927 40.43 23.9999 39.7105C25.7078 38.9909 33.2145 34.2848 36.5713 30.421H36.5707C38.8895 27.8783 40.0001 25.2978 40.0001 22.4324Z"
                fill="white"
            ></path>
            <path
                d="M20.7494 18.9727H19.6271C19.4551 18.9727 19.3152 19.1123 19.3152 19.2837V26.2556C19.3152 26.4273 19.4551 26.5666 19.6271 26.5666H20.7494C20.9215 26.5666 21.0611 26.4273 21.0611 26.2556V19.2837C21.0611 19.1123 20.9215 18.9727 20.7494 18.9727Z"
                fill="#00B900"
            ></path>
            <path
                d="M28.4738 18.9727H27.3515C27.1794 18.9727 27.0399 19.1123 27.0399 19.2837V23.4257L23.845 19.1111C23.8377 19.1 23.8294 19.0896 23.8208 19.0795L23.8187 19.0776C23.8125 19.0706 23.8064 19.0644 23.7999 19.0583C23.7981 19.0565 23.7963 19.0549 23.7941 19.0531C23.7889 19.0482 23.7834 19.0436 23.7776 19.0393C23.7751 19.0368 23.7723 19.035 23.7696 19.0328C23.7641 19.0292 23.7588 19.0252 23.7533 19.0218C23.7503 19.0197 23.7472 19.0178 23.7438 19.0163C23.7383 19.0129 23.7328 19.0095 23.7272 19.0068C23.7239 19.0052 23.7208 19.0034 23.7174 19.0022C23.7116 18.9994 23.7058 18.9967 23.6996 18.9945C23.696 18.9933 23.6929 18.9921 23.6895 18.9908C23.6834 18.9887 23.6773 18.9865 23.6708 18.985C23.6674 18.9838 23.6638 18.9832 23.6601 18.9819C23.6539 18.9807 23.6481 18.9792 23.6423 18.9779C23.638 18.9773 23.6334 18.9767 23.6291 18.9764C23.6236 18.9752 23.6181 18.9749 23.6125 18.9743C23.6073 18.9737 23.6021 18.9737 23.5966 18.9733C23.5926 18.9733 23.5895 18.9727 23.5855 18.9727H22.4635C22.2915 18.9727 22.1516 19.1123 22.1516 19.2837V26.2556C22.1516 26.4273 22.2915 26.5666 22.4635 26.5666H23.5855C23.7579 26.5666 23.8975 26.4273 23.8975 26.2556V22.1148L27.0963 26.435C27.1184 26.4663 27.1457 26.4917 27.1754 26.512C27.1764 26.5126 27.1776 26.5135 27.1785 26.5144C27.1849 26.5184 27.1914 26.5224 27.1978 26.5261C27.2009 26.5279 27.2037 26.5292 27.2067 26.5307C27.2113 26.5335 27.2165 26.5359 27.2214 26.5381C27.2267 26.5402 27.2313 26.5424 27.2368 26.5445C27.2398 26.5457 27.2429 26.547 27.246 26.5479C27.2533 26.5506 27.2601 26.5528 27.2671 26.5549C27.2687 26.5549 27.2702 26.5555 27.2717 26.5559C27.2972 26.5626 27.3239 26.5666 27.3515 26.5666H28.4738C28.6462 26.5666 28.7854 26.4273 28.7854 26.2556V19.2837C28.7854 19.1123 28.6462 18.9727 28.4738 18.9727Z"
                fill="#00B900"
            ></path>
            <path
                d="M18.0433 24.821H14.9939V19.2843C14.9939 19.1123 14.8543 18.9727 14.6825 18.9727H13.5599C13.3879 18.9727 13.2483 19.1123 13.2483 19.2843V26.2549V26.2555C13.2483 26.3393 13.2817 26.415 13.3354 26.4709C13.3366 26.4724 13.3379 26.4739 13.3397 26.4755C13.3412 26.477 13.3428 26.4782 13.3443 26.4798C13.4004 26.5337 13.4759 26.5669 13.5596 26.5669H13.5599H18.0433C18.2154 26.5669 18.3543 26.427 18.3543 26.2549V25.1326C18.3543 24.9606 18.2154 24.821 18.0433 24.821Z"
                fill="#00B900"
            ></path>
            <path
                d="M34.6715 20.7186C34.8435 20.7186 34.9825 20.5793 34.9825 20.4069V19.2846C34.9825 19.1126 34.8435 18.9727 34.6715 18.9727H30.1881H30.1875C30.1034 18.9727 30.0277 19.0064 29.9715 19.0607C29.9703 19.062 29.9688 19.0629 29.9679 19.0641C29.966 19.0659 29.9645 19.0678 29.963 19.0696C29.9096 19.1254 29.8765 19.2009 29.8765 19.2843V19.2846V26.2552V26.2555C29.8765 26.3393 29.9099 26.415 29.9636 26.4709C29.9648 26.4724 29.9663 26.4742 29.9679 26.4755C29.9691 26.477 29.9709 26.4785 29.9725 26.4798C30.0283 26.5334 30.1041 26.5669 30.1875 26.5669H30.1881H34.6715C34.8435 26.5669 34.9825 26.427 34.9825 26.2552V25.1326C34.9825 24.9609 34.8435 24.821 34.6715 24.821H31.6223V23.6426H34.6715C34.8435 23.6426 34.9825 23.503 34.9825 23.3309V22.2086C34.9825 22.0366 34.8435 21.8967 34.6715 21.8967H31.6223V20.7186H34.6715Z"
                fill="#00B900"
            ></path>
        </svg>
    );
}

function KaKaoTalkIcon({ width = '2rem', height = '2rem', className }) {
    return (
        <svg width={width} height={height} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 47.001C36.7026 47.001 47 36.7035 47 24.001C47 11.2984 36.7026 1.00098 24 1.00098C11.2975 1.00098 1 11.2984 1 24.001C1 36.7035 11.2975 47.001 24 47.001Z"
                fill="#FBE300"
            ></path>
            <path
                d="M24.0825 10C15.6421 10 8.7998 15.3949 8.7998 22.0498C8.7998 26.3524 11.6603 30.1276 15.9633 32.2594C15.7292 33.0668 14.459 37.4532 14.4084 37.7978C14.4084 37.7978 14.378 38.0567 14.5457 38.1555C14.7133 38.2542 14.9105 38.1775 14.9105 38.1775C15.3914 38.1104 20.4862 34.5316 21.3681 33.9101C22.249 34.0349 23.1562 34.0997 24.0825 34.0997C32.523 34.0997 39.3652 28.7049 39.3652 22.0498C39.3652 15.3949 32.523 10 24.0825 10Z"
                fill="black"
            ></path>
            <path
                d="M15.6327 26.2563C15.1464 26.2563 14.751 25.8786 14.751 25.4143V20.1763H13.3752C12.8981 20.1763 12.51 19.7889 12.51 19.3129C12.51 18.837 12.8982 18.4496 13.3752 18.4496H17.8901C18.3673 18.4496 18.7554 18.837 18.7554 19.3129C18.7554 19.7889 18.3671 20.1763 17.8901 20.1763H16.5144V25.4143C16.5144 25.8786 16.1189 26.2563 15.6327 26.2563ZM23.364 26.2448C22.9963 26.2448 22.715 26.0955 22.6303 25.8554L22.1937 24.7124L19.5051 24.7123L19.0682 25.856C18.9837 26.0957 18.7026 26.2448 18.3349 26.2448C18.1415 26.245 17.9504 26.2035 17.7745 26.1232C17.5314 26.011 17.2978 25.7027 17.5655 24.8711L19.6745 19.32C19.8231 18.8978 20.2744 18.4628 20.8486 18.4498C21.4245 18.4627 21.8758 18.8978 22.0247 19.3209L24.1328 24.8695C24.4011 25.703 24.1675 26.0115 23.9244 26.1233C23.7485 26.2035 23.5573 26.245 23.364 26.2448C23.364 26.2448 23.3638 26.2448 23.364 26.2448ZM21.73 23.1507L20.8494 20.6489L19.9687 23.1507H21.73ZM25.5518 26.1277C25.0858 26.1277 24.7068 25.765 24.7068 25.3195V19.3313C24.7068 18.8451 25.1106 18.4496 25.6069 18.4496C26.1031 18.4496 26.5069 18.8451 26.5069 19.3313V24.5113H28.3805C28.8465 24.5113 29.2255 24.8739 29.2255 25.3195C29.2255 25.765 28.8465 26.1277 28.3805 26.1277H25.5518ZM30.4502 26.2448C29.9639 26.2448 29.5685 25.8494 29.5685 25.3631V19.3313C29.5685 18.8451 29.9639 18.4496 30.4502 18.4496C30.9364 18.4496 31.3319 18.8451 31.3319 19.3313V21.2264L33.7918 18.7664C33.9183 18.6399 34.0921 18.5703 34.2808 18.5703C34.501 18.5703 34.722 18.6652 34.8876 18.8307C35.042 18.985 35.1342 19.1835 35.1468 19.3896C35.1596 19.5976 35.0904 19.7882 34.9522 19.9265L32.943 21.9354L35.1133 24.8106C35.1834 24.9028 35.2344 25.0081 35.2635 25.1202C35.2925 25.2323 35.299 25.3491 35.2826 25.4638C35.2669 25.5785 35.2285 25.689 35.1698 25.7888C35.1111 25.8886 35.0331 25.9758 34.9405 26.0453C34.788 26.1612 34.6017 26.2237 34.4101 26.2232C34.2735 26.2239 34.1387 26.1925 34.0164 26.1316C33.894 26.0708 33.7877 25.9821 33.7058 25.8728L31.6381 23.133L31.3321 23.439V25.3627C31.3319 25.5965 31.2389 25.8207 31.0735 25.9861C30.9082 26.1515 30.684 26.2445 30.4502 26.2448Z"
                fill="#FFE812"
            ></path>
        </svg>
    );
}

function AppleIcon({ width = '2rem', height = '2rem', className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 48 48" width={width} height={height}>
            <path
                fillRule="evenodd"
                d="M32.54 4c.278 2.368-.73 4.699-2.203 6.412-1.537 1.687-3.999 2.978-6.395 2.811-.312-2.276.9-4.697 2.26-6.174C27.739 5.372 30.406 4.09 32.539 4zm7.844 13.647c-.276.153-4.7 2.614-4.65 7.625.055 6.058 5.697 8.059 5.766 8.08-.034.14-.883 2.89-2.999 5.68-1.768 2.458-3.621 4.86-6.56 4.905-1.399.03-2.342-.345-3.326-.734-1.026-.407-2.095-.831-3.77-.831-1.773 0-2.89.437-3.966.86-.932.364-1.833.717-3.104.766-2.801.097-4.94-2.624-6.772-5.06-3.659-4.97-6.51-14.01-2.689-20.159 1.851-3.016 5.23-4.96 8.837-5.011 1.59-.031 3.114.538 4.45 1.038 1.02.381 1.932.722 2.678.722.657 0 1.543-.328 2.576-.709 1.628-.601 3.62-1.336 5.648-1.137 1.387.036 5.338.508 7.887 3.962l-.006.003z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}

function InstagramIcon({ width = '2rem', height = '2rem', className }) {
    return (
        <svg width={width} height={height} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46Z"
                fill="url(#InstagramCircleColor_paint0_radial)"
            ></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 46C36.1503 46 46 36.1503 46 24C46 11.8497 36.1503 2 24 2C11.8497 2 2 11.8497 2 24C2 36.1503 11.8497 46 24 46Z"
                fill="url(#InstagramCircleColor_paint1_radial)"
            ></path>
            <path
                d="M12.2689 29.0393L12.2683 29.0257L12.2674 29.0121C12.2581 28.8681 12.2467 28.7257 12.2361 28.5942L12.2357 28.5899C12.2259 28.4679 12.2168 28.3551 12.2093 28.2443V19.8627C12.21 19.8592 12.2108 19.8558 12.2115 19.8523C12.2258 19.7843 12.2503 19.6567 12.2525 19.5033C12.2783 18.5107 12.3298 17.6235 12.5372 16.7855C13.0067 14.9166 14.0499 13.622 15.7951 12.8635C16.7343 12.4582 17.7702 12.3191 18.9552 12.2691C19.2441 12.2596 19.5271 12.2332 19.7741 12.2093H28.1373C28.1408 12.21 28.1442 12.2108 28.1477 12.2115C28.2157 12.2258 28.3433 12.2503 28.4967 12.2525C29.4893 12.2783 30.3765 12.3298 31.2145 12.5372C33.0835 13.0068 34.3781 14.05 35.1366 15.7954C35.5419 16.7345 35.6809 17.7702 35.7309 18.9552C35.7404 19.244 35.7668 19.5271 35.7907 19.7741V28.1373C35.79 28.1408 35.7892 28.1442 35.7885 28.1477C35.7742 28.2157 35.7497 28.3433 35.7475 28.4967C35.7217 29.4894 35.6701 30.3768 35.4627 31.2149C34.9931 33.0836 33.9499 34.3781 32.2048 35.1366C31.2656 35.5418 30.2298 35.6809 29.0448 35.7309C28.756 35.7404 28.4729 35.7668 28.2259 35.7907H19.8627C19.8592 35.79 19.8558 35.7892 19.8523 35.7885C19.7843 35.7742 19.6567 35.7497 19.5033 35.7475C18.5106 35.7217 17.6232 35.6701 16.7851 35.4627C14.9165 34.9931 13.622 33.95 12.8635 32.205C12.4575 31.2643 12.3187 30.2267 12.2689 29.0393Z"
                stroke="white"
                strokeWidth="2.4186"
            ></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 28.207C26.3015 28.207 28.2068 26.327 28.2068 24.0508C28.2068 21.7071 26.3437 19.8017 24.0421 19.7933C21.69 19.7933 19.7931 21.6649 19.7931 23.9917C19.7931 26.3186 21.6731 28.207 24 28.207ZM30.5 24.0084C30.5 27.6083 27.583 30.5084 23.9831 30.5C20.4001 30.4916 17.5 27.583 17.5 23.9916C17.5 20.3917 20.417 17.4916 24.0169 17.5C27.5999 17.5084 30.5 20.417 30.5 24.0084Z"
                fill="white"
            ></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M30.4921 15.3327C31.2981 15.3327 31.9446 15.9712 31.9446 16.7692C31.9446 17.5672 31.2981 18.2216 30.5001 18.2216C29.7101 18.2216 29.0557 17.5672 29.0557 16.7692C29.0636 15.9791 29.7101 15.3327 30.4921 15.3327Z"
                fill="white"
            ></path>
            <defs>
                <radialGradient
                    id="InstagramCircleColor_paint0_radial"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(13.6876 49.3889) rotate(-90) scale(43.6073 40.5582)"
                >
                    <stop stop-color="#FFDD55"></stop>
                    <stop offset="0.1" stop-color="#FFDD55"></stop>
                    <stop offset="0.5" stop-color="#FF543E"></stop>
                    <stop offset="1" stop-color="#C837AB"></stop>
                </radialGradient>
                <radialGradient
                    id="InstagramCircleColor_paint1_radial"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(-5.37023 5.16969) rotate(78.6806) scale(19.4926 80.3494)"
                >
                    <stop stop-color="#3771C8"></stop>
                    <stop offset="0.128" stop-color="#3771C8"></stop>
                    <stop offset="1" stop-color="#6600FF" stop-opacity="0"></stop>
                </radialGradient>
            </defs>
        </svg>
    );
}
// function HeartIcon({ width = '2.4rem', height = '2.4rem', className }) {
//     return (
//         <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width={width} height={height}>
//             <use xlink:href="#svg-heart-fill"></use>
//         </svg>
//     );
//}
// function CommentIcon({ width = '2.4rem', height = '2.4rem', className }) {
//     return (
//         <svg width={width} height={height} viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//             <use xlink:href="#svg-ellipsis-right-fill"></use>
//         </svg>
//     );
// }
// function ShareIcon({ width = '2.4rem', height = '2.4rem', className }) {
//     return (
//         <svg width={width} height={height} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//             <use xlink:href="#svg-pc-share"></use>
//         </svg>
//     );
// }

export {
    MessageIcon,
    InboxIcon,
    ProfileIcon,
    CoinIcon,
    SettingIcon,
    LanguageIcon,
    FeedbackIcon,
    KeyboardIcon,
    LogoutIcon,
    HomeIcon,
    FollowIcon,
    LiveIcon,
    QrIcon,
    GoogleIcon,
    FbIcon,
    TwitterIcon,
    lineIcon,
    KaKaoTalkIcon,
    AppleIcon,
    InstagramIcon,
    //HeartIcon,
    // CommentIcon,
    // ShareIcon,
};

import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import OptionBox from '../OptionBox/OptionBox'
import './OptionsSlider.css'

import React from "react";
import Slider from "react-slick";
export default function OptionsSlider() {

    const options = [
        {
            icon: <svg width="160" height="38" viewBox="0 0 138 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.9348 7.09033V17.9738H4.80569V7.09033H0V33.0706H4.80699V22.5403H14.9335V33.0706H19.7418V7.09033H14.9348ZM35.1281 24.6733C35.1281 25.7147 34.709 26.7134 33.9631 27.4497C33.2171 28.1861 32.2054 28.5997 31.1504 28.5997C30.0955 28.5997 29.0838 28.1861 28.3378 27.4497C27.5919 26.7134 27.1728 25.7147 27.1728 24.6733V13.5446H22.613V24.6733C22.613 26.9062 23.5116 29.0477 25.1111 30.6265C26.7106 32.2054 28.88 33.0924 31.142 33.0924C33.404 33.0924 35.5734 32.2054 37.1729 30.6265C38.7724 29.0477 39.671 26.9062 39.671 24.6733V13.5446H35.1281V24.6733ZM68.9149 14.6914C68.9149 12.4094 70.4435 11.6864 72.1178 11.6864C73.4682 11.6864 75.2505 12.7009 76.4174 13.9312L79.4031 10.4562C77.9122 8.46569 74.8888 7.09033 72.4131 7.09033C67.4656 7.09033 63.888 9.9502 63.888 14.6914C63.888 23.488 74.7795 20.6962 74.7795 25.6198C74.7795 27.1377 73.286 28.4784 71.5766 28.4784C68.8797 28.4784 68.0055 27.1775 66.767 25.8009L63.4522 29.2027C65.5727 31.771 68.1876 33.0757 71.319 33.0757C76.0193 33.0757 79.7999 30.1812 79.7999 25.6557C79.7999 15.8908 68.9071 18.9253 68.9071 14.6914M136.296 28.9201C133.602 28.9201 132.835 27.7695 132.835 26.0076V18.2062H137.024V14.2535H132.835V9.03844L128.212 11.0867V26.9772C128.212 31.0416 131.053 33.0899 134.948 33.0899C135.56 33.1001 136.171 33.0513 136.772 32.946L137.9 28.8469C137.391 28.8816 136.807 28.9163 136.296 28.9163M52.4853 13.6743C50.2268 13.6743 48.6501 14.3216 47.1254 15.7971V7.24572H42.5591V23.0964C42.5591 29.0293 46.9042 33.095 51.788 33.095C57.2051 33.095 61.9704 28.9574 61.9704 23.3866C61.9704 17.8852 57.585 13.6782 52.4853 13.6782M52.4566 28.558C51.7761 28.558 51.1022 28.4257 50.4735 28.1686C49.8447 27.9115 49.2734 27.5347 48.7922 27.0597C48.311 26.5847 47.9292 26.0207 47.6688 25.4001C47.4084 24.7794 47.2743 24.1142 47.2743 23.4425C47.2743 22.7707 47.4084 22.1055 47.6688 21.4848C47.9292 20.8642 48.311 20.3002 48.7922 19.8252C49.2734 19.3502 49.8447 18.9734 50.4735 18.7163C51.1022 18.4592 51.7761 18.3269 52.4566 18.3269C53.8311 18.3269 55.1492 18.8659 56.1211 19.8252C57.093 20.7846 57.6389 22.0857 57.6389 23.4425C57.6389 24.7992 57.093 26.1003 56.1211 27.0597C55.1492 28.019 53.8311 28.558 52.4566 28.558ZM102.077 23.1503C102.077 17.5693 97.3223 13.4419 91.8947 13.4419C87.0123 13.4419 82.6658 17.5063 82.6658 23.4405V39.3002H87.2322V30.7372C88.7543 32.2102 90.3336 32.86 92.5894 32.86C97.6891 32.86 102.076 28.653 102.076 23.1503M97.7529 23.0938C97.7529 24.4505 97.2069 25.7517 96.235 26.711C95.2632 27.6704 93.945 28.2093 92.5706 28.2093C91.1961 28.2093 89.878 27.6704 88.9061 26.711C87.9343 25.7517 87.3883 24.4505 87.3883 23.0938C87.3883 21.7371 87.9343 20.4359 88.9061 19.4766C89.878 18.5172 91.1961 17.9783 92.5706 17.9783C93.945 17.9783 95.2632 18.5172 96.235 19.4766C97.2069 20.4359 97.7529 21.7371 97.7529 23.0938Z" fill="#D9ECFF" />
                <path d="M116.832 13.2233V8.69398C117.438 8.41425 117.952 7.97027 118.312 7.41373C118.673 6.85718 118.866 6.21097 118.869 5.5503V5.44628C118.869 3.52001 117.287 1.95845 115.336 1.95845H115.231C114.293 1.95845 113.395 2.32591 112.732 2.98001C112.069 3.63411 111.697 4.52125 111.697 5.44628V5.5503C111.7 6.21097 111.893 6.85718 112.254 7.41373C112.615 7.97027 113.128 8.41425 113.734 8.69398V13.2233C111.992 13.4867 110.351 14.1999 108.977 15.2908L96.3929 5.6158C96.4826 5.29604 96.5295 4.96728 96.5347 4.63725C96.5362 3.85994 96.3042 3.09964 95.8679 2.45252C95.4317 1.8054 94.8108 1.30054 94.0838 1.00178C93.3569 0.703031 92.5564 0.623812 91.7839 0.774149C91.0113 0.924486 90.3012 1.29763 89.7435 1.84637C89.1858 2.39511 88.8054 3.0948 88.6506 3.85694C88.4958 4.61907 88.5734 5.40942 88.8737 6.12799C89.174 6.84657 89.6834 7.4611 90.3375 7.89385C90.9917 8.3266 91.7611 8.55812 92.5486 8.55914C93.2375 8.55594 93.9135 8.37439 94.5091 8.03263L106.901 17.551C105.787 19.211 105.207 21.1635 105.234 23.1541C105.261 25.1447 105.896 27.0809 107.054 28.7105L103.285 32.4321C102.981 32.3359 102.663 32.2848 102.343 32.2805C101.697 32.281 101.065 32.4707 100.528 32.8255C99.9908 33.1803 99.5722 33.6843 99.3251 34.2739C99.078 34.8635 99.0134 35.5121 99.1397 36.1379C99.2659 36.7637 99.5772 37.3385 100.034 37.7896C100.491 38.2408 101.074 38.5481 101.708 38.6727C102.341 38.7973 102.999 38.7336 103.596 38.4897C104.193 38.2457 104.704 37.8325 105.063 37.3022C105.423 36.7719 105.615 36.1483 105.615 35.5103C105.611 35.1945 105.559 34.8812 105.462 34.5805L109.19 30.8988C110.406 31.8227 111.82 32.4597 113.324 32.761C114.828 33.0622 116.381 33.0197 117.866 32.6366C119.35 32.2536 120.726 31.5402 121.888 30.5511C123.051 29.5621 123.968 28.3235 124.57 26.9304C125.172 25.5374 125.444 24.0267 125.363 22.5141C125.283 21.0016 124.852 19.5273 124.105 18.2042C123.359 16.8811 122.315 15.7443 121.054 14.881C119.793 14.0176 118.349 13.4506 116.832 13.2233ZM115.286 28.1198C114.597 28.1385 113.912 28.0207 113.269 27.7733C112.627 27.526 112.042 27.154 111.548 26.6796C111.054 26.2051 110.661 25.6376 110.393 25.0108C110.125 24.3839 109.986 23.7104 109.986 23.0299C109.986 22.3495 110.125 21.6759 110.393 21.0491C110.661 20.4222 111.054 19.8548 111.548 19.3803C112.042 18.9058 112.627 18.5339 113.269 18.2866C113.912 18.0392 114.597 17.9214 115.286 17.9401C116.622 17.9863 117.887 18.5422 118.816 19.491C119.744 20.4397 120.264 21.7071 120.264 23.0262C120.265 24.3453 119.747 25.6132 118.819 26.5628C117.892 27.5125 116.627 28.0697 115.292 28.1172" fill="#FF7A59" />
            </svg>
            ,

        },
        {
            icon: <svg width="160" height="35" viewBox="0 0 147 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M44.829 18.8465H31.4468L43.0358 12.578L40.7376 8.84708L29.1472 15.1156L35.8368 4.25886L31.8552 2.10534L25.1641 12.9593V0.425049H20.5648V12.9607L13.8738 2.10534L9.89073 4.25886L16.5804 15.1129L4.99281 8.84708L2.69316 12.578L14.2822 18.8465H0.899994V23.1549H14.2807L2.69316 29.4235L4.99135 33.1544L16.5818 26.8859L9.89073 37.7426L13.8723 39.8961L20.5648 29.0408V41.5751H25.1641V28.7719L31.9782 39.8275L35.7124 37.8085L28.8969 26.7501L40.7347 33.153L43.0344 29.4221L31.4468 23.1536H44.8275V18.8465H44.829ZM22.8645 26.8571C22.0434 26.8572 21.2304 26.7058 20.4719 26.4114C19.7133 26.1171 19.024 25.6857 18.4435 25.1417C17.8629 24.5978 17.4023 23.952 17.088 23.2412C16.7737 22.5304 16.612 21.7687 16.6118 20.9994C16.6117 20.23 16.7733 19.4682 17.0874 18.7574C17.4016 18.0466 17.8619 17.4007 18.4425 16.8567C19.0229 16.3127 19.712 15.881 20.4706 15.5865C21.2291 15.292 22.042 15.1404 22.863 15.1403C24.5211 15.1402 26.1114 15.7571 27.284 16.8557C28.4567 17.9543 29.1156 19.4443 29.1157 20.998C29.1159 22.5517 28.4574 24.0419 27.2851 25.1407C26.1127 26.2395 24.5226 26.8569 22.8645 26.8571Z" fill="#5753F3" />
                <path d="M56.6841 36.0511V5.94849H62.5804V36.0511H56.6841ZM113.236 15.594H118.865V18.0905C120.063 16.0947 122.857 15.0125 125.251 15.0125C128.222 15.0125 130.615 16.2195 131.724 18.4211C133.451 15.9246 135.758 15.0125 138.64 15.0125C142.674 15.0125 146.53 17.299 146.53 22.7871V36.0511H140.812V23.9105C140.812 21.7062 139.659 20.0424 136.954 20.0424C134.426 20.0424 132.918 21.8735 132.918 24.0778V36.0525H127.069V23.9105C127.069 21.7062 125.871 20.0424 123.21 20.0424C120.638 20.0424 119.13 21.8324 119.13 24.0778V36.0525H113.236V15.594ZM75.9054 36.6436C69.2627 36.6436 64.4526 32.0252 64.4526 25.8226C64.4526 19.7186 69.248 14.9919 75.9054 14.9919C82.5951 14.9919 87.3583 19.7625 87.3583 25.8226C87.3583 31.9813 82.5453 36.6436 75.9054 36.6436ZM75.9054 19.9985C74.2578 20.0007 72.6783 20.6152 71.5136 21.7074C70.349 22.7995 69.6942 24.28 69.693 25.8239C69.6942 27.3679 70.349 28.8483 71.5136 29.9404C72.6783 31.0327 74.2578 31.6472 75.9054 31.6494C77.5528 31.6468 79.132 31.0322 80.2963 29.94C81.4606 28.8479 82.1152 27.3676 82.1164 25.8239C82.1152 24.2803 81.4606 22.8 80.2963 21.7078C79.132 20.6157 77.5528 20.0011 75.9054 19.9985ZM99.9515 36.6436C93.3087 36.6436 88.4986 32.0252 88.4986 25.8226C88.4986 19.7186 93.2941 14.9919 99.9515 14.9919C106.641 14.9919 111.404 19.7625 111.404 25.8226C111.404 31.9813 106.588 36.6436 99.9515 36.6436ZM99.9515 19.9285C98.2849 19.9311 96.6873 20.5529 95.5094 21.6575C94.3313 22.7621 93.6688 24.2596 93.6673 25.8212C93.6688 27.3828 94.3313 28.8803 95.5094 29.9849C96.6873 31.0895 98.2849 31.7113 99.9515 31.7139C101.618 31.7113 103.215 31.0895 104.394 29.9849C105.572 28.8803 106.234 27.3828 106.236 25.8212C106.234 24.2596 105.572 22.7621 104.394 21.6575C103.215 20.5529 101.618 19.9311 99.9515 19.9285Z" fill="#D9ECFF" />
            </svg>
            ,

        },
        {
            icon: <svg width="160" height="30" viewBox="0 0 161 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M65.1271 11.3024H70.3809C69.5045 6.45844 64.6682 3.08447 58.3742 3.08447C50.9272 3.08447 45.339 7.83243 45.339 15.7844C45.339 23.5942 50.6758 28.4382 58.5265 28.4382C65.5722 28.4382 70.6161 24.5082 70.6161 18.1463V15.1824H59.0684V18.6763H65.6276C65.5446 22.1962 62.8347 24.4242 58.5541 24.4242C53.7893 24.4242 50.5236 21.3282 50.5236 15.7364C50.5236 10.1804 53.8447 7.09644 58.4434 7.09644C61.8752 7.09644 64.2231 8.68642 65.1271 11.3024Z" fill="#D9ECFF" />
                <path d="M74.0901 28.1003H79.1201V9.60049H74.0901V28.1003ZM76.627 6.66052C78.2253 6.66052 79.5307 5.59853 79.5307 4.29854C79.5307 2.99855 78.2253 1.92456 76.627 1.92456C75.0287 1.92456 73.7095 2.98455 73.7095 4.29854C73.7095 5.61253 75.0057 6.66052 76.6178 6.66052H76.627Z" fill="#D9ECFF" />
                <path d="M94.1822 9.6007H89.9708V5.15674H84.9408V9.6007H81.9126V12.9747H84.9408V23.2665C84.9131 26.7485 87.8329 28.4665 91.6106 28.3645C92.6169 28.3473 93.6148 28.2009 94.5719 27.9305L93.7232 24.5185C93.2426 24.6267 92.7483 24.6839 92.2518 24.6885C90.9856 24.6885 89.9708 24.3025 89.9708 22.5425V12.9647H94.1822V9.6007Z" fill="#D9ECFF" />
                <path d="M98.0756 28.1004H115.765V24.3524H103.232V3.42065H98.0756V28.1004Z" fill="#D9ECFF" />
                <path d="M125.4 28.4744C128.749 28.4744 130.748 27.1124 131.666 25.5584H131.832V28.1004H136.676V15.7125C136.676 10.8206 132.077 9.35059 128.004 9.35059C123.516 9.35059 120.07 11.0846 118.958 14.4585L123.656 15.0385C124.155 13.7725 125.573 12.6886 128.038 12.6886C130.375 12.6886 131.652 13.7245 131.652 15.5445V15.6165C131.652 16.8685 130.137 16.9305 126.371 17.2785C122.231 17.6645 118.271 18.7365 118.271 22.9065C118.257 26.5464 121.327 28.4744 125.4 28.4744ZM127.054 25.2744C124.955 25.2744 123.453 24.4424 123.453 22.8405C123.453 21.1645 125.135 20.4665 127.374 20.1885C128.696 20.0325 131.336 19.7425 131.987 19.2865V21.4665C132.001 23.5205 130.082 25.2684 127.054 25.2684V25.2744Z" fill="#D9ECFF" />
                <path d="M140.38 28.1004H145.327V25.1844H145.617C146.411 26.5344 148.064 28.4264 151.734 28.4264C156.764 28.4264 160.53 24.9664 160.53 18.8705C160.53 12.7006 156.653 9.3506 151.72 9.3506C147.954 9.3506 146.383 11.3146 145.617 12.6526H145.405V3.42065H140.38V28.1004ZM145.313 18.8465C145.313 15.2465 147.091 12.9286 150.329 12.9286C153.678 12.9286 155.403 15.3985 155.403 18.8465C155.403 22.2945 153.653 24.8464 150.329 24.8464C147.119 24.8464 145.313 22.4365 145.313 18.8465Z" fill="#D9ECFF" />
                <path d="M35.8556 11.8746L35.8072 11.7626L30.9178 0.702715C30.8188 0.485551 30.6426 0.30133 30.415 0.17672C30.245 0.0823945 30.052 0.023901 29.8513 0.00592717C29.6507 -0.0120481 29.448 0.0109971 29.2593 0.0732145C29.0709 0.135434 28.9016 0.235093 28.7655 0.364208C28.6295 0.493321 28.5301 0.648297 28.4754 0.816714L25.1751 9.57863H11.81L8.50965 0.816714C8.4546 0.648549 8.35501 0.493865 8.2188 0.364998C8.08259 0.236131 7.91354 0.136648 7.72511 0.0744805C7.53671 0.0123131 7.33417 -0.0108175 7.13362 0.00693317C6.93308 0.024685 6.74009 0.0828245 6.57005 0.17672C6.34234 0.30133 6.16623 0.485551 6.06727 0.702715L1.18021 11.7646L1.12947 11.8746C0.425873 13.4692 0.339193 15.2189 0.882495 16.86C1.4258 18.501 2.56963 19.9445 4.14152 20.9725L4.15997 20.9845L4.20146 21.0125L11.6393 25.8464L15.3294 28.2644L17.5711 29.7344C17.8342 29.9068 18.1548 30 18.4844 30C18.8141 30 19.1347 29.9068 19.3977 29.7344L21.6395 28.2644L25.3296 25.8464L32.8205 20.9845L32.8412 20.9705C34.413 19.9429 35.5569 18.4999 36.1008 16.8592C36.6444 15.2186 36.5583 13.4692 35.8556 11.8746Z" fill="#E24329" />
                <path d="M35.8554 11.8747L35.807 11.7627C33.4248 12.1866 31.1801 13.0622 29.234 14.3267L18.4982 21.3666L25.3341 25.8465L32.825 20.9846L32.8457 20.9706C34.4168 19.9424 35.5598 18.4992 36.1027 16.8586C36.6454 15.218 36.5586 13.4688 35.8554 11.8747Z" fill="#FC6D26" />
                <path d="M11.6392 25.8464L15.3293 28.2644L17.571 29.7344C17.834 29.9068 18.1546 30 18.4843 30C18.8139 30 19.1346 29.9068 19.3976 29.7344L21.6393 28.2644L25.3294 25.8464L18.4935 21.3665L11.6392 25.8464Z" fill="#FCA326" />
                <path d="M7.75087 14.3266C5.80541 13.0628 3.56155 12.1879 1.18021 11.7646L1.12947 11.8746C0.425874 13.4693 0.339193 15.219 0.882495 16.86C1.42579 18.5011 2.56962 19.9445 4.14152 20.9725L4.15997 20.9845L4.20146 21.0125L11.6393 25.8465L18.4798 21.3665L7.75087 14.3266Z" fill="#FC6D26" />
            </svg>
            ,

        },
        {
            icon: <svg width="160" height="42" viewBox="0 0 161 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.0875 7.53898C21.954 7.037 15.1221 7.03701 8.98854 7.53898C7.7046 7.64406 6.73178 8.76423 6.63524 10.1334C6.32564 14.5245 6.28445 21.103 6.56834 25.4896C6.66211 26.9386 7.77858 28.1822 9.28902 28.1822H14.024V34.8375L9.29868 34.8337C4.96383 34.8337 1.07288 31.1728 0.73678 25.9796C0.430791 21.2517 0.473053 14.3309 0.806621 9.59992C1.14092 4.85856 4.48711 1.22772 8.56962 0.893603C14.9821 0.3688 22.094 0.368798 28.5065 0.893601C32.589 1.22772 35.9352 4.85856 36.2695 9.59992C36.6031 14.3309 36.5884 21.2517 36.2825 25.9796C35.9464 31.1728 32.0644 34.8486 27.7296 34.8486L23.0531 34.8447L14.024 41.5V34.8375L23.0531 28.1822H27.7303C29.2406 28.1822 30.3571 26.9386 30.4509 25.4896C30.7348 21.103 30.7504 14.5245 30.4408 10.1334C30.3443 8.76423 29.3715 7.64406 28.0875 7.53898Z" fill="#FE5000" />
                <path d="M45.4639 29.7531H59.5948V25.7105H49.746V5.35815H45.4639V29.7531Z" fill="#D9ECFF" />
                <path d="M61.6434 29.7529H65.8031V11.6309H61.6434V29.7529ZM61.3069 6.89133C61.3069 8.45958 62.3163 9.64448 63.7233 9.64448C65.1302 9.64448 66.1396 8.45958 66.1396 6.89133C66.1396 5.32308 65.1302 4.13818 63.7233 4.13818C62.3163 4.13818 61.3069 5.32308 61.3069 6.89133Z" fill="#D9ECFF" />
                <path d="M82.1136 11.6309H77.9539L74.5282 24.9087L71.1026 11.6309H66.9428L72.3566 29.7528H76.6999L82.1136 11.6309Z" fill="#D9ECFF" />
                <path d="M89.5362 30.1703C93.0537 30.1703 95.8982 27.7657 96.4488 24.4549H92.809C92.4114 25.7095 91.3102 26.755 89.5362 26.755C87.1199 26.755 86.1717 24.908 86.1717 22.7821V22.3291H96.5711V19.1577C96.5711 14.8015 94.1854 11.2119 89.4751 11.2119C84.7036 11.2119 82.1343 14.6969 82.1343 19.6108V22.0851C82.1343 27.1732 85.04 30.1703 89.5362 30.1703ZM86.1717 18.8092C86.1717 16.3697 87.0893 14.5575 89.4751 14.5575C91.7079 14.5575 92.7478 16.2652 92.7478 18.5304V18.9835H86.1717V18.8092Z" fill="#D9ECFF" />
                <path d="M107.627 30.2407C113.04 30.2407 116.374 26.0587 116.588 21.0751H112.612C112.337 23.8283 110.808 26.2329 107.627 26.2329C104.048 26.2329 102.519 23.4449 102.519 19.5417V15.5688C102.519 11.6656 104.048 8.87762 107.627 8.87762C110.808 8.87762 112.337 11.2823 112.612 14.0354H116.588C116.374 9.05187 113.04 4.86987 107.627 4.86987C101.173 4.86987 98.2673 9.57462 98.2673 15.8128V19.2978C98.2673 25.5359 101.173 30.2407 107.627 30.2407Z" fill="#D9ECFF" />
                <path d="M118.849 29.7533H123.009V19.0195C123.009 16.58 124.201 15.3254 126.068 15.3254C128.087 15.3254 128.973 16.824 128.973 18.915V29.7533H133.133V18.1483C133.133 13.8616 130.962 11.213 127.505 11.213C125.456 11.213 123.834 12.2237 123.009 13.7919V4.31274H118.849V29.7533Z" fill="#D9ECFF" />
                <path d="M141.074 30.1703C142.909 30.1703 144.927 29.2991 145.662 28.0793V29.7521H149.668V18.1819C149.668 13.9651 146.946 11.2119 142.97 11.2119C139.544 11.2119 137.066 13.0938 136.149 16.6137H140.002C140.431 15.6379 141.318 14.906 142.755 14.906C144.468 14.906 145.508 16.1606 145.508 17.8334V20.3078C144.774 19.6108 143.367 18.7744 141.471 18.7744C137.648 18.7744 135.047 20.5866 135.047 24.5246C135.047 28.0445 137.494 30.1703 141.074 30.1703ZM142.144 27.0338C140.401 27.0338 139.085 26.058 139.085 24.3852C139.085 22.7124 140.308 21.8063 142.266 21.8063C144.132 21.8063 145.508 22.7473 145.508 24.3504C145.508 25.8838 143.979 27.0338 142.144 27.0338Z" fill="#D9ECFF" />
                <path d="M157.441 29.7523H160.317V25.9188H158.634C157.533 25.9188 157.136 25.4309 157.136 24.246V15.4638H160.53V11.6303H157.136V6.68164H152.945V11.6303H150.681V15.4638H152.945V24.5945C152.945 27.8007 154.383 29.7523 157.441 29.7523Z" fill="#D9ECFF" />
            </svg>
            ,

        },
        {
            icon: <svg width="164" height="45" viewBox="0 0 201 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.67653 28.1638C3.93967 28.1654 3.2156 27.9788 2.57827 27.6232C1.94095 27.2676 1.41322 26.7558 1.04899 26.1399C0.690345 25.5284 0.511477 24.8346 0.531551 24.1327C0.551625 23.431 0.769883 22.7476 1.16295 22.156L8.63327 10.8768C9.01562 10.2706 9.55844 9.7729 10.2063 9.43443C10.8542 9.09596 11.5839 8.9289 12.3209 8.95031C13.0574 8.96728 13.7759 9.17209 14.403 9.54375C15.0301 9.91541 15.5433 10.4406 15.8899 11.0655C16.5863 12.3316 16.4993 13.8549 15.6652 15.0434L8.19962 26.3225C7.82099 26.8897 7.29963 27.3559 6.68375 27.6777C6.06788 27.9996 5.37748 28.1668 4.67653 28.1638Z" fill="#F62B54" />
                <path d="M17.4901 28.1638C15.9834 28.1638 14.597 27.3893 13.8689 26.1444C13.5111 25.5346 13.3326 24.8426 13.3527 24.1426C13.3728 23.4427 13.5906 22.7612 13.9829 22.1712L21.439 10.9179C21.8157 10.3032 22.3565 9.79661 23.0055 9.45064C23.6546 9.10464 24.388 8.9319 25.1298 8.95031C26.6492 8.98226 28.0261 9.79945 28.7225 11.0777C29.4142 12.356 29.3128 13.8884 28.4534 15.0738L20.999 26.3271C20.6215 26.8919 20.1023 27.3562 19.489 27.6772C18.8758 27.9982 18.1884 28.1656 17.4901 28.1638Z" fill="#FFCC00" />
                <path d="M30.017 28.258C32.141 28.258 33.8629 26.6372 33.8629 24.6378C33.8629 22.6384 32.141 21.0176 30.017 21.0176C27.8929 21.0176 26.171 22.6384 26.171 24.6378C26.171 26.6372 27.8929 28.258 30.017 28.258Z" fill="#00CA72" />
                <path d="M197.096 21.2277C198.257 21.2277 198.952 22.022 198.952 23.3231V27.7818H200.53V23.2211C200.53 21.0085 199.446 19.7257 197.408 19.7257C196.61 19.7257 195.343 19.9357 194.589 21.3464C194.413 20.9303 194.124 20.5676 193.751 20.297C193.378 20.0264 192.937 19.8579 192.473 19.8094C192.18 19.758 191.883 19.7411 191.586 19.7592C190.937 19.8094 189.782 20.1974 189.35 21.077V19.8946H187.77V27.7818H189.35V23.5255C189.35 21.8699 190.477 21.2277 191.605 21.2277C192.662 21.2277 193.357 22.0053 193.357 23.3064V27.7818H194.927V23.5255C194.927 22.2077 195.75 21.2124 197.096 21.2277ZM181.973 26.464C182.695 26.4792 183.391 26.2022 183.896 25.7C184.402 25.1979 184.672 24.5146 184.645 23.8131C184.645 22.2244 183.429 21.2277 181.973 21.2277C180.515 21.2277 179.301 22.2244 179.301 23.8131C179.273 24.5131 179.542 25.1949 180.045 25.6955C180.549 26.1977 181.242 26.4761 181.96 26.464H181.973ZM181.973 27.9431C179.665 27.9431 177.739 26.3042 177.739 23.804C177.739 21.3038 179.665 19.7166 181.973 19.7166C184.281 19.7166 186.222 21.3038 186.222 23.804C186.222 26.3042 184.269 27.9507 181.962 27.9507L181.973 27.9431ZM169.612 23.804L169.596 23.8131C169.596 21.3129 171.573 19.7257 173.897 19.7166C174.48 19.7057 175.06 19.8128 175.598 20.0309C176.136 20.249 176.62 20.5732 177.019 20.9827L175.822 21.9627C175.569 21.7227 175.267 21.5336 174.937 21.4061C174.606 21.2786 174.252 21.2154 173.897 21.22C172.441 21.22 171.174 22.2168 171.174 23.804C171.174 24.8768 171.838 25.8431 172.855 26.254C173.873 26.6649 175.044 26.4366 175.822 25.6788L177.037 26.6588C176.636 27.0724 176.149 27.4005 175.608 27.6217C175.067 27.843 174.484 27.9525 173.897 27.9431C171.59 27.9431 169.612 26.3042 169.612 23.804ZM164.558 26.2677C164.557 26.1298 164.584 25.9929 164.637 25.8649C164.69 25.7369 164.769 25.6202 164.869 25.5216C164.97 25.423 165.089 25.3443 165.221 25.2901C165.353 25.2358 165.495 25.2071 165.638 25.2055C165.782 25.2071 165.923 25.2358 166.055 25.2901C166.187 25.3443 166.306 25.423 166.406 25.5216C166.507 25.6202 166.586 25.7369 166.639 25.8649C166.692 25.9929 166.719 26.1298 166.717 26.2677C166.703 26.5347 166.584 26.7865 166.383 26.9717C166.182 27.157 165.916 27.2617 165.638 27.2644C165.36 27.2617 165.093 27.157 164.893 26.9717C164.692 26.7865 164.573 26.5347 164.558 26.2677Z" fill="#D9ECFF" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M168.876 9.86781H163.256L159.316 19.6328L155.398 9.86781H149.778L156.61 25.2982L152.36 35.5H157.939L168.876 9.86781ZM134.696 18.4504C134.696 20.9157 136.937 22.5378 139.138 22.5378C141.302 22.5378 143.428 21.0282 143.428 18.4489C143.428 15.8696 141.302 14.3585 139.138 14.3585C136.937 14.3585 134.696 15.9822 134.696 18.4489V18.4504ZM143.428 27.0665V25.1141C142.288 26.7728 139.629 27.3998 138.265 27.3998C133.748 27.3998 129.229 23.9759 129.229 18.4489C129.229 12.9235 133.746 9.49957 138.265 9.49957C139.403 9.49957 142.062 9.86476 143.428 11.7822V9.87391H148.666V27.0696L143.428 27.068V27.0665ZM127.739 27.0665H122.5V24.93C121.624 26.5126 119.502 27.4348 117.299 27.4348C112.742 27.4348 108.718 23.9363 108.718 18.5189C108.718 12.9996 112.742 9.49652 117.299 9.49652C119.499 9.49652 121.628 10.3791 122.5 11.9632V0.5H127.739V27.0665ZM122.386 18.4109C122.386 15.833 120.45 14.322 118.287 14.322C116.045 14.322 114.184 15.9426 114.184 18.4109C114.184 20.9583 116.045 22.5713 118.285 22.5713C120.49 22.5743 122.386 20.8791 122.386 18.4109ZM95.7649 17.9665C95.7649 15.3522 97.1704 14.468 99.0299 14.468C100.814 14.468 102.105 15.6093 102.105 17.892V27.0635H107.382V16.7887C107.382 11.8918 104.875 9.49652 100.888 9.49652C98.8004 9.49652 96.7131 10.6378 95.7632 12.3696V9.86781H90.4896V27.0635H95.7649V17.9665ZM79.775 27.3587C74.764 27.3587 70.5842 23.8237 70.5842 18.4093C70.5842 12.992 74.7593 9.49195 79.775 9.49195C84.7904 9.49195 89.0023 12.992 89.0023 18.4093C89.0023 23.8268 84.7856 27.3602 79.775 27.3602V27.3587ZM79.775 22.3522C81.975 22.3522 83.7998 20.803 83.7998 18.4109C83.7998 16.0902 81.9767 14.5061 79.775 14.5061C79.2448 14.4981 78.7185 14.594 78.2282 14.7878C77.7378 14.9817 77.2937 15.2695 76.9228 15.6337C76.5498 15.9999 76.2573 16.4344 76.062 16.9115C75.8672 17.3886 75.7742 17.8985 75.7884 18.4109C75.7897 20.8061 77.6115 22.3522 79.775 22.3522ZM61.1244 14.4696C62.6802 14.4696 64.0477 15.6489 64.0477 17.8935V27.0665H69.2866V17.3C69.2866 12.1078 66.6609 9.49348 62.4524 9.49348C61.2019 9.49348 58.8469 9.85871 57.1377 12.5491C56.1502 10.5602 54.2526 9.52848 51.4479 9.52848C50.474 9.5237 49.5199 9.78867 48.6985 10.2917C47.8771 10.7947 47.224 11.5145 46.8171 12.365V9.86934H41.5371V27.065H46.8124V17.9665C46.8124 15.3522 48.2938 14.468 49.8873 14.468C51.4068 14.468 52.7712 15.6093 52.8106 17.7824V27.065H58.0872V17.9665C58.0872 15.4663 59.4546 14.4711 61.1244 14.4711V14.4696Z" fill="#D9ECFF" />
            </svg>
            ,

        },


    ]


    function Responsive() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            initialSlide: 0,
            nextArrow: <MdArrowForwardIos className='no_hover' />,
            prevArrow: <MdArrowBackIosNew className='no_hover' />,
            responsive: [
                {
                    breakpoint: 1050,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="slider-container">
                <Slider {...settings}>


                    {
                        options.map(element => {

                            return <OptionBox option={element} />
                        })
                    }


                </Slider>
            </div>
        );
    }




    return (
        <div className='option_slider_con'>
            <Responsive />
        </div>
    )
}

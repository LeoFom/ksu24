import '../styles/administratorTable.scss'


function AdministratorTable() {

    return(
        <table>
            <thead>
            <tr>
                <th className='head-name'>
                <div className="names-element">
                    <h2>Назва</h2>
                    <div className="names-element-button search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M15.2429 14.2589L10.6054 9.62143C11.325 8.69107 11.7143 7.55357 11.7143 6.35714C11.7143 4.925 11.1554 3.58214 10.1446 2.56964C9.13393 1.55714 7.7875 1 6.35714 1C4.92679 1 3.58036 1.55893 2.56964 2.56964C1.55714 3.58036 1 4.925 1 6.35714C1 7.7875 1.55893 9.13393 2.56964 10.1446C3.58036 11.1571 4.925 11.7143 6.35714 11.7143C7.55357 11.7143 8.68929 11.325 9.61964 10.6071L14.2571 15.2429C14.2707 15.2565 14.2869 15.2673 14.3047 15.2746C14.3224 15.282 14.3415 15.2858 14.3607 15.2858C14.38 15.2858 14.399 15.282 14.4168 15.2746C14.4345 15.2673 14.4507 15.2565 14.4643 15.2429L15.2429 14.4661C15.2565 14.4525 15.2673 14.4363 15.2746 14.4186C15.282 14.4008 15.2858 14.3817 15.2858 14.3625C15.2858 14.3433 15.282 14.3242 15.2746 14.3064C15.2673 14.2887 15.2565 14.2725 15.2429 14.2589ZM9.18571 9.18571C8.42857 9.94107 7.425 10.3571 6.35714 10.3571C5.28929 10.3571 4.28571 9.94107 3.52857 9.18571C2.77321 8.42857 2.35714 7.425 2.35714 6.35714C2.35714 5.28929 2.77321 4.28393 3.52857 3.52857C4.28571 2.77321 5.28929 2.35714 6.35714 2.35714C7.425 2.35714 8.43036 2.77143 9.18571 3.52857C9.94107 4.28571 10.3571 5.28929 10.3571 6.35714C10.3571 7.425 9.94107 8.43036 9.18571 9.18571Z" fill="black" fill-opacity="0.25"/>
                    </svg>
                    </div>
                </div>
                </th>
                <th className='head-student' style={{width: "14%"}}>
                <div className="names-element">
                    <h2>Студент</h2>
                    <div className="names-element-button search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M15.2429 14.2589L10.6054 9.62143C11.325 8.69107 11.7143 7.55357 11.7143 6.35714C11.7143 4.925 11.1554 3.58214 10.1446 2.56964C9.13393 1.55714 7.7875 1 6.35714 1C4.92679 1 3.58036 1.55893 2.56964 2.56964C1.55714 3.58036 1 4.925 1 6.35714C1 7.7875 1.55893 9.13393 2.56964 10.1446C3.58036 11.1571 4.925 11.7143 6.35714 11.7143C7.55357 11.7143 8.68929 11.325 9.61964 10.6071L14.2571 15.2429C14.2707 15.2565 14.2869 15.2673 14.3047 15.2746C14.3224 15.282 14.3415 15.2858 14.3607 15.2858C14.38 15.2858 14.399 15.282 14.4168 15.2746C14.4345 15.2673 14.4507 15.2565 14.4643 15.2429L15.2429 14.4661C15.2565 14.4525 15.2673 14.4363 15.2746 14.4186C15.282 14.4008 15.2858 14.3817 15.2858 14.3625C15.2858 14.3433 15.282 14.3242 15.2746 14.3064C15.2673 14.2887 15.2565 14.2725 15.2429 14.2589ZM9.18571 9.18571C8.42857 9.94107 7.425 10.3571 6.35714 10.3571C5.28929 10.3571 4.28571 9.94107 3.52857 9.18571C2.77321 8.42857 2.35714 7.425 2.35714 6.35714C2.35714 5.28929 2.77321 4.28393 3.52857 3.52857C4.28571 2.77321 5.28929 2.35714 6.35714 2.35714C7.425 2.35714 8.43036 2.77143 9.18571 3.52857C9.94107 4.28571 10.3571 5.28929 10.3571 6.35714C10.3571 7.425 9.94107 8.43036 9.18571 9.18571Z" fill="black" fill-opacity="0.25"/>
                    </svg>
                    </div>
                </div>
                </th>
                <th className='head-supervisor'>
                <div className="names-element left">
                    <h2>Керівник</h2>
                    <div className="names-element-button search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M15.2429 14.2589L10.6054 9.62143C11.325 8.69107 11.7143 7.55357 11.7143 6.35714C11.7143 4.925 11.1554 3.58214 10.1446 2.56964C9.13393 1.55714 7.7875 1 6.35714 1C4.92679 1 3.58036 1.55893 2.56964 2.56964C1.55714 3.58036 1 4.925 1 6.35714C1 7.7875 1.55893 9.13393 2.56964 10.1446C3.58036 11.1571 4.925 11.7143 6.35714 11.7143C7.55357 11.7143 8.68929 11.325 9.61964 10.6071L14.2571 15.2429C14.2707 15.2565 14.2869 15.2673 14.3047 15.2746C14.3224 15.282 14.3415 15.2858 14.3607 15.2858C14.38 15.2858 14.399 15.282 14.4168 15.2746C14.4345 15.2673 14.4507 15.2565 14.4643 15.2429L15.2429 14.4661C15.2565 14.4525 15.2673 14.4363 15.2746 14.4186C15.282 14.4008 15.2858 14.3817 15.2858 14.3625C15.2858 14.3433 15.282 14.3242 15.2746 14.3064C15.2673 14.2887 15.2565 14.2725 15.2429 14.2589ZM9.18571 9.18571C8.42857 9.94107 7.425 10.3571 6.35714 10.3571C5.28929 10.3571 4.28571 9.94107 3.52857 9.18571C2.77321 8.42857 2.35714 7.425 2.35714 6.35714C2.35714 5.28929 2.77321 4.28393 3.52857 3.52857C4.28571 2.77321 5.28929 2.35714 6.35714 2.35714C7.425 2.35714 8.43036 2.77143 9.18571 3.52857C9.94107 4.28571 10.3571 5.28929 10.3571 6.35714C10.3571 7.425 9.94107 8.43036 9.18571 9.18571Z" fill="black" fill-opacity="0.25"/>
                    </svg>
                    </div>
                </div>
                </th>
                <th className='head-weak'>
                <div className="names-element">
                    <h2>К-ть тижнів</h2>
                </div>
                </th>
                <th className='head-faculty'>
                <div className="names-element">
                    <h2>Факультет</h2>
                </div>
                </th>
                <th className='head-department'>
                <div className="names-element">
                    <h2>Кафедра</h2>
                </div>
                </th>
                <th className='head-grade'>
                <div className="names-element">
                    <h2>Оцінка</h2>
                    <div className="names-element-button sort">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                        <path d="M9.6921 7.63879L5.72356 3.03702C5.60997 2.9053 5.39124 2.9053 5.27644 3.03702L1.3079 7.63879C1.16047 7.81039 1.2934 8.06174 1.53146 8.06174H9.46854C9.7066 8.06174 9.83953 7.81039 9.6921 7.63879Z" fill="black" fill-opacity="0.25"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                        <path d="M9.46854 2.93825H1.53146C1.2934 2.93825 1.16047 3.1896 1.3079 3.3612L5.27644 7.96297C5.39003 8.09469 5.60876 8.09469 5.72356 7.96297L9.6921 3.3612C9.83953 3.1896 9.7066 2.93825 9.46854 2.93825Z" fill="black" fill-opacity="0.25"/>
                    </svg>
                    </div>
                </div>
                </th>
                <th className='head-check'>
                <div className="names-element">
                    <h2>Перевірка</h2>
                </div>
                </th>
                <th className='head-download'>
                <div className="names-element">
                    <h2>Завантаження</h2>
                </div>
                </th>
                <th className='head-state'>
                <div className="names-element">
                    <h2>Стан</h2>
                    <div className="button-block">
                        <div className="names-element-button filter">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M14.5744 1.60715H1.42797C0.990473 1.60715 0.717259 2.08393 0.936902 2.46429L5.09047 9.52501V13.8214C5.09047 14.1375 5.34404 14.3929 5.65833 14.3929H10.344C10.6583 14.3929 10.9119 14.1375 10.9119 13.8214V9.52501L15.0673 2.46429C15.2851 2.08393 15.0119 1.60715 14.5744 1.60715ZM9.63333 13.1071H6.36904V10.3214H9.63512V13.1071H9.63333ZM9.80476 8.88215L9.63512 9.17858H6.36726L6.19762 8.88215L2.65654 2.89286H13.3458L9.80476 8.88215Z" fill="black" fill-opacity="0.25"/>
                        </svg>
                        </div>
                        <div className="names-element-button sort">
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                            <path d="M9.6921 7.63879L5.72356 3.03702C5.60997 2.9053 5.39124 2.9053 5.27644 3.03702L1.3079 7.63879C1.16047 7.81039 1.2934 8.06174 1.53146 8.06174H9.46854C9.7066 8.06174 9.83953 7.81039 9.6921 7.63879Z" fill="black" fill-opacity="0.25"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                            <path d="M9.46854 2.93825H1.53146C1.2934 2.93825 1.16047 3.1896 1.3079 3.3612L5.27644 7.96297C5.39003 8.09469 5.60876 8.09469 5.72356 7.96297L9.6921 3.3612C9.83953 3.1896 9.7066 2.93825 9.46854 2.93825Z" fill="black" fill-opacity="0.25"/>
                        </svg>
                        </div>
                    </div>
                </div>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className='name'>
                <h3>ЩП_Філатова_ФКНФМ_332</h3>
                </td>
                <td className='student'>
                <h3>Філатов П. К.</h3>
                </td>
                <td className='supervisor'>
                <h3>Кушнір Н. О.</h3>
                </td>
                <td className='weak'>
                <h3>4</h3>
                </td>
                <td className='faculty'>
                <div className="data-block">
                    <h3>ФКНФМ</h3>
                </div>
                </td>
                <td className='department'>
                <h3>КННПЗ</h3>
                </td>
                <td className='grade'>
                    <h3></h3>
                </td>
                <td className='check active'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <g opacity="0.2">
                            <path d="M21.5646 10.3665C19.2369 5.46318 15.7183 2.99554 11.0016 2.99554C6.28241 2.99554 2.76634 5.46318 0.43866 10.369C0.345296 10.5667 0.296875 10.7826 0.296875 11.0012C0.296875 11.2199 0.345296 11.4358 0.43866 11.6335C2.76634 16.5368 6.28487 19.0045 11.0016 19.0045C15.7208 19.0045 19.2369 16.5368 21.5646 11.631C21.7536 11.2333 21.7536 10.7717 21.5646 10.3665ZM11.0016 17.2366C7.04112 17.2366 4.14134 15.2281 2.09603 11C4.14134 6.77188 7.04112 4.7634 11.0016 4.7634C14.9621 4.7634 17.8619 6.77188 19.9072 11C17.8643 15.2281 14.9646 17.2366 11.0016 17.2366ZM10.9034 6.67858C8.51679 6.67858 6.58196 8.6134 6.58196 11C6.58196 13.3866 8.51679 15.3214 10.9034 15.3214C13.29 15.3214 15.2248 13.3866 15.2248 11C15.2248 8.6134 13.29 6.67858 10.9034 6.67858ZM10.9034 13.75C9.38353 13.75 8.15339 12.5199 8.15339 11C8.15339 9.48014 9.38353 8.25001 10.9034 8.25001C12.4233 8.25001 13.6534 9.48014 13.6534 11C13.6534 12.5199 12.4233 13.75 10.9034 13.75Z" fill="#1890FF"/>
                        </g>
                    </svg>
                </td>
                <td className='download'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <g opacity="0.2">
                            <path d="M18.5625 9.13393H17.5804C17.4723 9.13393 17.3839 9.22232 17.3839 9.33036V10.3125C17.3839 10.4205 17.4723 10.5089 17.5804 10.5089H18.5625C18.6705 10.5089 18.7589 10.4205 18.7589 10.3125V9.33036C18.7589 9.22232 18.6705 9.13393 18.5625 9.13393ZM19.3482 6.58036H16.4018V1.375C16.4018 1.26697 16.3134 1.17857 16.2054 1.17857H5.79464C5.68661 1.17857 5.59822 1.26697 5.59822 1.375V6.58036H2.65179C1.56652 6.58036 0.6875 7.45938 0.6875 8.54465V16.5982C0.6875 17.0328 1.03862 17.3839 1.47321 17.3839H5.59822V20.625C5.59822 20.733 5.68661 20.8214 5.79464 20.8214H16.2054C16.3134 20.8214 16.4018 20.733 16.4018 20.625V17.3839H20.5268C20.9614 17.3839 21.3125 17.0328 21.3125 16.5982V8.54465C21.3125 7.45938 20.4335 6.58036 19.3482 6.58036ZM7.26786 2.84822H14.7321V6.58036H7.26786V2.84822ZM14.7321 19.1518H7.26786V12.375H14.7321V19.1518ZM19.6429 15.7143H16.4018V10.7054H5.59822V15.7143H2.35714V8.54465C2.35714 8.38259 2.48973 8.25 2.65179 8.25H19.3482C19.5103 8.25 19.6429 8.38259 19.6429 8.54465V15.7143Z" fill="#242220" fill-opacity="0.65"/>
                        </g>
                    </svg>
                </td>
                <td className='state inProces'>
                    <input type="button" value="На підписанні"/>
                </td>
            </tr>
            <tr>
                <td className='name'>
                <h3>ЩП_Філатова_ФКНФМ_232</h3>
                </td>
                <td className='student'>
                <h3>Черненко І. Є.</h3>
                </td>
                <td className='supervisor'>
                <h3>Кушнір Н. О.</h3>
                </td>
                <td className='weak'>
                <h3>4</h3>
                </td>
                <td className='faculty'>
                <div className="data-block">
                    <h3>ФКНФМ</h3>
                </div>
                </td>
                <td className='department'>
                <h3>КМ</h3>
                </td>
                <td className='grade'>
                    <h3>90A</h3>
                </td>
                <td className='check'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <g opacity="0.2">
                            <path d="M21.5646 10.3665C19.2369 5.46318 15.7183 2.99554 11.0016 2.99554C6.28241 2.99554 2.76634 5.46318 0.43866 10.369C0.345296 10.5667 0.296875 10.7826 0.296875 11.0012C0.296875 11.2199 0.345296 11.4358 0.43866 11.6335C2.76634 16.5368 6.28487 19.0045 11.0016 19.0045C15.7208 19.0045 19.2369 16.5368 21.5646 11.631C21.7536 11.2333 21.7536 10.7717 21.5646 10.3665ZM11.0016 17.2366C7.04112 17.2366 4.14134 15.2281 2.09603 11C4.14134 6.77188 7.04112 4.7634 11.0016 4.7634C14.9621 4.7634 17.8619 6.77188 19.9072 11C17.8643 15.2281 14.9646 17.2366 11.0016 17.2366ZM10.9034 6.67858C8.51679 6.67858 6.58196 8.6134 6.58196 11C6.58196 13.3866 8.51679 15.3214 10.9034 15.3214C13.29 15.3214 15.2248 13.3866 15.2248 11C15.2248 8.6134 13.29 6.67858 10.9034 6.67858ZM10.9034 13.75C9.38353 13.75 8.15339 12.5199 8.15339 11C8.15339 9.48014 9.38353 8.25001 10.9034 8.25001C12.4233 8.25001 13.6534 9.48014 13.6534 11C13.6534 12.5199 12.4233 13.75 10.9034 13.75Z" fill="#1890FF"/>
                        </g>
                    </svg>
                </td>
                <td className='download'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M18.5625 9.13392H17.5804C17.4723 9.13392 17.3839 9.22231 17.3839 9.33034V10.3125C17.3839 10.4205 17.4723 10.5089 17.5804 10.5089H18.5625C18.6705 10.5089 18.7589 10.4205 18.7589 10.3125V9.33034C18.7589 9.22231 18.6705 9.13392 18.5625 9.13392ZM19.3482 6.58034H16.4018V1.37499C16.4018 1.26695 16.3134 1.17856 16.2054 1.17856H5.79464C5.68661 1.17856 5.59822 1.26695 5.59822 1.37499V6.58034H2.65179C1.56652 6.58034 0.6875 7.45936 0.6875 8.54463V16.5982C0.6875 17.0328 1.03862 17.3839 1.47321 17.3839H5.59822V20.625C5.59822 20.733 5.68661 20.8214 5.79464 20.8214H16.2054C16.3134 20.8214 16.4018 20.733 16.4018 20.625V17.3839H20.5268C20.9614 17.3839 21.3125 17.0328 21.3125 16.5982V8.54463C21.3125 7.45936 20.4335 6.58034 19.3482 6.58034ZM7.26786 2.8482H14.7321V6.58034H7.26786V2.8482ZM14.7321 19.1518H7.26786V12.375H14.7321V19.1518ZM19.6429 15.7143H16.4018V10.7053H5.59822V15.7143H2.35714V8.54463C2.35714 8.38258 2.48973 8.24999 2.65179 8.24999H19.3482C19.5103 8.24999 19.6429 8.38258 19.6429 8.54463V15.7143Z" fill="#1890FF"/>
                    </svg>
                </td>
                <td className='state completed'>
                    <input type="button" value="Підписано"/>
                </td>
            </tr>
            <tr>
                <td className='name'>
                <h3>ЩП_Щопкіна_ФКНФМ_232</h3>
                </td>
                <td className='student'>
                <h3>Щопкіна Т. П.</h3>
                </td>
                <td className='supervisor'>
                <h3>Кушнір Н. О.</h3>
                </td>
                <td className='weak'>
                <h3>4</h3>
                </td>
                <td className='faculty'>
                <div className="data-block">
                    <h3>ФКНФМ</h3>
                </div>
                </td>
                <td className='department'>
                <h3>КФ</h3>
                </td>
                <td className='grade'>
                    <h3></h3>
                </td>
                <td className='check active'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <g opacity="0.2">
    <path d="M21.5646 10.3665C19.2369 5.46318 15.7183 2.99554 11.0016 2.99554C6.28241 2.99554 2.76634 5.46318 0.43866 10.369C0.345296 10.5667 0.296875 10.7826 0.296875 11.0012C0.296875 11.2199 0.345296 11.4358 0.43866 11.6335C2.76634 16.5368 6.28487 19.0045 11.0016 19.0045C15.7208 19.0045 19.2369 16.5368 21.5646 11.631C21.7536 11.2333 21.7536 10.7717 21.5646 10.3665ZM11.0016 17.2366C7.04112 17.2366 4.14134 15.2281 2.09603 11C4.14134 6.77188 7.04112 4.7634 11.0016 4.7634C14.9621 4.7634 17.8619 6.77188 19.9072 11C17.8643 15.2281 14.9646 17.2366 11.0016 17.2366ZM10.9034 6.67858C8.51679 6.67858 6.58196 8.6134 6.58196 11C6.58196 13.3866 8.51679 15.3214 10.9034 15.3214C13.29 15.3214 15.2248 13.3866 15.2248 11C15.2248 8.6134 13.29 6.67858 10.9034 6.67858ZM10.9034 13.75C9.38353 13.75 8.15339 12.5199 8.15339 11C8.15339 9.48014 9.38353 8.25001 10.9034 8.25001C12.4233 8.25001 13.6534 9.48014 13.6534 11C13.6534 12.5199 12.4233 13.75 10.9034 13.75Z" fill="#1890FF"/>
  </g>
</svg>
                </td>
                <td className='download'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <g opacity="0.2">
                            <path d="M18.5625 9.13393H17.5804C17.4723 9.13393 17.3839 9.22232 17.3839 9.33036V10.3125C17.3839 10.4205 17.4723 10.5089 17.5804 10.5089H18.5625C18.6705 10.5089 18.7589 10.4205 18.7589 10.3125V9.33036C18.7589 9.22232 18.6705 9.13393 18.5625 9.13393ZM19.3482 6.58036H16.4018V1.375C16.4018 1.26697 16.3134 1.17857 16.2054 1.17857H5.79464C5.68661 1.17857 5.59822 1.26697 5.59822 1.375V6.58036H2.65179C1.56652 6.58036 0.6875 7.45938 0.6875 8.54465V16.5982C0.6875 17.0328 1.03862 17.3839 1.47321 17.3839H5.59822V20.625C5.59822 20.733 5.68661 20.8214 5.79464 20.8214H16.2054C16.3134 20.8214 16.4018 20.733 16.4018 20.625V17.3839H20.5268C20.9614 17.3839 21.3125 17.0328 21.3125 16.5982V8.54465C21.3125 7.45938 20.4335 6.58036 19.3482 6.58036ZM7.26786 2.84822H14.7321V6.58036H7.26786V2.84822ZM14.7321 19.1518H7.26786V12.375H14.7321V19.1518ZM19.6429 15.7143H16.4018V10.7054H5.59822V15.7143H2.35714V8.54465C2.35714 8.38259 2.48973 8.25 2.65179 8.25H19.3482C19.5103 8.25 19.6429 8.38259 19.6429 8.54465V15.7143Z" fill="#242220" fill-opacity="0.65"/>
                        </g>
                    </svg>
                </td>
                <td className='state inProces'>
                    <input type="button" value="На підписанні"/>
                </td>
            </tr>
            </tbody>
        </table>
    )
}

export default AdministratorTable
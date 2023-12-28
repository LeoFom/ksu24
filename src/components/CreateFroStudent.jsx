import { useState } from "react";
import "../styles/CreateFromStudent.scss";

export default function CreateFromStudent() {
  // asdad
  const [createDiary, setCreateDiary] = useState({
    "id": 1,
    "name": "Практична 461 Фоменко",
    "week": 6,
    "date": "10.04.2023 - 02.06.2023",
    "grade": "60E",
    "course": 4,
    "supervisor": "Лемещук О. В.",
    "edit": true,
    "state": true,
    "workName": "Аналіз ШІ",
    "workTask": [
      "Аналіз шкільної программи",
      "Аналіз 15-и ШІ"
    ],
    "file": true
})
  const diaryCreatePost = (obj) => {
    axios.post('https://658b4f21ba789a962238a6e6.mockapi.io/examplePost', obj)
  } 
  
  return (
    <section className="createBlock">
      <div className="prevButton">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="14"
          viewBox="0 0 9 14"
          fill="none"
        >
          <path
            d="M8 1L2 7L8 13"
            stroke="#242220"
            stroke-opacity="0.65"
            stroke-width="1.5"
          />
        </svg>
        <span>Назад</span>
      </div>
      <div className="createBody">
        <div className="mainInformation General">
          <div className="TitleBody">
            <div className="Title">
              Основна інформація про щоденник практики
            </div>
            <div className="Star">*</div>
          </div>
          <div className="ElementBody">
            <div className="element">
              <label>Кількість тижнів</label>
              <input onChange={setCreateDiary(createDiary.week)} type="text" />
            </div>
            <div className="element">
              <label>Викладач - керівник за фахом</label>
              <input onChange={setCreateDiary(createDiary.supervisor)} type="text" />
            </div>
            <div className="element">
              <label>Викладач - керівник за фахом</label>
              <input onChange={setCreateDiary(createDiary.supervisor)} type="text" />
            </div>
            <div className="element">
              <label>Викладач - керівник за фахом</label>
              <input onChange={setCreateDiary(createDiary.supervisor)} type="text" />
            </div>

            <div className="element">
              <label>База практики</label>
              <input  type="text" />
            </div>
            <div className="element">
              <label>Керівник від бази практики</label>
              <input type="text" />
            </div>
            <div className="element">
              <label>Термін проходження</label>
              <input onChange={setCreateDiary(createDiary.date)} type="text" />
            </div>
            <div className="element">
              <label>Термін проходження</label>
              <input onChange={setCreateDiary(createDiary.date)} type="text" />
            </div>
          </div>
        </div>
        <PracticeTask />
        <PracticeTask />
        <div className="addFile General">
          <div className="TitleBody">
            <div className="Title">Додайте файл своєї презентації</div>
          </div>
          <div className="Body">
            <div className="Image">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M41.4949 20.9112L41.4855 20.8737L36.2261 7.50962C35.9918 6.75493 35.2933 6.23462 34.5011 6.23462H13.1824C12.3855 6.23462 11.6777 6.76431 11.4527 7.52837L6.53551 20.7565L6.52145 20.7893L6.51207 20.8268C6.45113 21.0565 6.43238 21.2909 6.4652 21.5206C6.46051 21.5956 6.45582 21.6706 6.45582 21.7456V38.8971C6.45706 39.6526 6.75772 40.3768 7.29193 40.911C7.82615 41.4452 8.55033 41.7459 9.30582 41.7471H38.7058C40.2761 41.7471 41.5558 40.4674 41.5605 38.8971V21.7456C41.5605 21.6846 41.5605 21.6237 41.5558 21.5721C41.5746 21.3424 41.5558 21.1221 41.4949 20.9112ZM27.6293 18.8956L27.6152 19.6315C27.5777 21.7362 26.1246 23.1518 24.0011 23.1518C22.9652 23.1518 22.0746 22.819 21.4324 22.1862C20.7902 21.5534 20.4386 20.6721 20.4199 19.6315L20.4058 18.8956H10.7589L14.4855 9.83462H33.198L37.0277 18.8956H27.6293ZM10.0511 22.4956H17.4246C18.5636 25.1721 20.9871 26.7518 24.0058 26.7518C25.5855 26.7518 27.0527 26.3112 28.2386 25.4768C29.2793 24.7456 30.0902 23.7237 30.6152 22.4956H37.9511V38.1471H10.0511V22.4956Z"
                  fill="#1890FF"
                />
              </svg>
            </div>
            <div className="Information">
              <div className="first">
                Click or drag file to this area to upload
              </div>
              <div className="second">
                Завантажте презентацію для захисту Вашої курсової роботи. Файл
                не повинен перевищувати 20 МБ.
              </div>
            </div>
          </div>
        </div>
      </div>
      <button>Відправити на погодження</button>
    </section>
  );
}

export function PracticeTask() {
  return (
    <div className="Task General">
      <div className="Head">
        <div className="Title">
          <span>Назва роботи (виконаної задачі)</span>
        </div>
        <div className="Calendar">
          <input type="text" placeholder="Період виконання" />
        </div>
      </div>
      <div className="Body">
        <div className="Name">
          <ol>
            <li>
              <input
                placeholder="Назва роботи (виконаної підзадачі)"
                type="text"
                onChange={setCreateDiary(createDiary.workName)}
              />
            </li>
            <li className="unactive">
              <input onChange={setCreateDiary(createDiary.workTask[0])} placeholder="Додати підзадачу" type="text" />
              
            </li>
          </ol>
        </div>
      </div>
      <div className="Footer">
        <div className="Button">
          <div className="element">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="23"
              viewBox="0 0 22 23"
              fill="none"
            >
              <g clip-path="url(#clip0_3653_30461)">
                <path
                  d="M18.8555 0.5H5.69475C5.58672 0.5 5.49833 0.588393 5.49833 0.696429V2.07143C5.49833 2.17946 5.58672 2.26786 5.69475 2.26786H17.8733V19.1607C17.8733 19.2687 17.9617 19.3571 18.0698 19.3571H19.4448C19.5528 19.3571 19.6412 19.2687 19.6412 19.1607V1.28571C19.6412 0.851116 19.2901 0.5 18.8555 0.5ZM15.7126 3.64286H3.14118C2.70658 3.64286 2.35547 3.99397 2.35547 4.42857V17.4592C2.35547 17.6679 2.43895 17.8667 2.58627 18.0141L6.84141 22.2692C6.89542 22.3232 6.95681 22.3674 7.0231 22.4042V22.4509H7.12623C7.21217 22.4828 7.30301 22.5 7.39632 22.5H15.7126C16.1472 22.5 16.4983 22.1489 16.4983 21.7143V4.42857C16.4983 3.99397 16.1472 3.64286 15.7126 3.64286ZM7.02065 19.9513L4.90658 17.8348H7.02065V19.9513ZM14.7305 20.7321H8.59208V17.2455C8.59208 16.7029 8.15257 16.2634 7.60993 16.2634H4.12333V5.41071H14.7305V20.7321Z"
                  fill="#242220"
                  fill-opacity="0.2"
                />
              </g>
              <defs>
                <clipPath id="clip0_3653_30461">
                  <rect
                    width="22"
                    height="22"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="element">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
            >
              <path
                d="M7.59989 3.08039H7.39453C7.50748 3.08039 7.59989 2.98798 7.59989 2.87503V3.08039H15.4035V2.87503C15.4035 2.98798 15.4959 3.08039 15.6088 3.08039H15.4035V4.92861H17.2517V2.87503C17.2517 1.9689 16.515 1.23218 15.6088 1.23218H7.39453C6.48839 1.23218 5.75167 1.9689 5.75167 2.87503V4.92861H7.59989V3.08039ZM20.5374 4.92861H2.46596C2.01161 4.92861 1.64453 5.29568 1.64453 5.75003V6.57146C1.64453 6.68441 1.73694 6.77682 1.84989 6.77682H3.40033L4.03438 20.202C4.07545 21.0774 4.79933 21.7679 5.67467 21.7679H17.3287C18.2066 21.7679 18.9279 21.0799 18.969 20.202L19.603 6.77682H21.1535C21.2664 6.77682 21.3588 6.68441 21.3588 6.57146V5.75003C21.3588 5.29568 20.9917 4.92861 20.5374 4.92861ZM17.131 19.9197H5.87232L5.25112 6.77682H17.7522L17.131 19.9197Z"
                fill="#242220"
                fill-opacity="0.2"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

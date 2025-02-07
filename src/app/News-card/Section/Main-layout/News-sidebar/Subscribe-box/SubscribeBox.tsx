import "./SubscribeBox.scss";

function SubscribeBox () {
  return (
  <>
    <div className="subscribe-box">
        <div className="subscribe-discription_box">
            <div className="subscribe-title">Подписка</div>
            <div className="subscribe-separation"></div>
        </div>
        <div className="subscribe-input">
            <label className="subscribe-input-wrapper" htmlFor="subscribe-input-wrapper">
                <input id="subscribe-input-wrapper" placeholder="Email address" type="text" />
            </label>
        </div>
        <div className="subscribe-button">
          <button>Подписаться</button>
        </div>
        <div className="subscribe-explanation">Нажимая кнопку «Подписаться», вы подтверждаете, что ознакомились с нашей Политикой конфиденциальности.</div>
    </div>
  </>
)
}

export default SubscribeBox;

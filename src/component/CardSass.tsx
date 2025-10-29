import '../styles/scss/components/Card.scss'

export default function CardSass(){
    return(
        <li className="list">
            <span className="cate"><i className="pro">시원펜pro 호환</i> </span>
            <div className="add_cart"><a href="javascript:;">장바구니</a></div>
            <div className="thumb">
                <a href="javascript:;" className="thumb">
                    <img src="/sample_thumb.webp" alt="상품이미지"/>
                </a>
                <div className="buy_box"><a href="">바로구매</a></div>
            </div>
            <div className="info_box">
                <p className="subject">상품명</p>
            </div>
            <div className="price_box">
                <span className="sale"><em>25</em>%</span>
                <div className="price_info">
                    <del>10000원</del>
                    <span className="price"><strong>7500</strong>원</span>
                </div>
            </div>				
        </li>
    )
}

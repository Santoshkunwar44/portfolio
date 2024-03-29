import { styled } from 'styled-components'
interface ReviewsWrapperProps {
    isLoading: boolean
}
export const ReviewsWrapper = styled.div<ReviewsWrapperProps>`

display:flex;
flex-direction:column;
gap:1rem;
padding:2rem;
.reviews_container{
    padding:1rem;
    display:flex;
    gap:2rem;
    flex-wrap:wrap;
    justify-content:center;
    flex-direction:column;
    .review_header{
        filter:${props => props.isLoading ? "blur(1px)" : "blur(0px)"};
        height:100px;
        display:flex;
        justify-content:space-between;
        align-items:center;


        .header_left{
            display:flex;
            align-items:center;
            gap:1rem;
            h1{
                font-weight:600;
                letter-spacing:1px;
            }

        }
        .header_right{
            display:flex;
            align-items:center;
            gap:2rem;

            .reviewFilterItem{
                display:flex;
                flex-direction:column;
                label{
                    font-size:12px;
                    letter-spacing:1px;
                    color:var(--gray);
                }
                select{
                    height:40px;
                    border-color:var(--border_color);
                    border-radius:4px;
                    padding:0 1rem;
                    letter-spacing:1px;
                    color:var(--gray);
                    background:var(--light_black);
                    option{
                        background:transparent;
                        letter-spacing:1px;
                    }
                }
            }
            .reviewButton{
                height:40px;
                background:var(--main_color);
                border:none;
                outline:none;
                border-radius:4px;
                padding:0 10px;
                letter-spacing:1px;
                cursor:pointer;
            }
        }
    }
    .review_wrapper{
        
        display:flex;
        flex-wrap:wrap;
        gap:1rem;
        
        
    }

}

`
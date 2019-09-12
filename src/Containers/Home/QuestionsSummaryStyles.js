import styled from "styled-components";


export const QuestionSummaryWrapper = styled.div`
    border: 1px solid #ccc;
    border-radius: 5px;

    .question-header{
        border-bottom: 1px solid #ccc;
        padding: 5px;
        font-weight: 800;
        font-size: 18px;
    }

    .question-header::after{
        content: ":";
    }

    .content{
        height: 100px;
        width: 200px;
    }

    .img-wrapper, .content-wrapper{
        height: 100%;
        padding: 10px;
       
    }

    .img-wrapper{
        width: 50px; 
              
    }

    .img-wrapper img{
        border-radius: 50%;
        height: 25px;
        width: 25px;
    }

    

    .content-wrapper .heading{
        font-weight: 800;
        font-size: 18px;
    }

    .content-wrapper .options{

    }

    .content-wrapper .viewpollbtn{

    }
`;
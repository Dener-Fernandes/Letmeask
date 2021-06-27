import { ReactNode } from 'react';
import '../styles/question.scss';
import cx from 'classnames';

type QuestionProps = {
    content: string,
    author: {
        name: string,
        avatar: string
    },
    children?: ReactNode,
    isAnswered?: boolean,
    isHighLighted?: boolean
}

export function Question({
    content,
    author,
    isAnswered = false,
    isHighLighted = false,
    children
    
}: QuestionProps) {
    return (
        <div className={cx("questions", {answered: isAnswered}, {highLighted: isHighLighted && !isAnswered})}>
            <p>{content}</p>
            <footer>
                <div className="user-info">
                    <img src={author.avatar} alt="Imagem indisponível"/>
                    <span>{author.name}</span>
                </div>
                <div>
                    {children}
                </div>
            </footer>
        </div>
    );
}
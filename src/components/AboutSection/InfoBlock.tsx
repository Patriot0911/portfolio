import { IThemeProps } from '../../types';

const InfoBlock = ({ theme }: IThemeProps) => {
    return (
        <div
            className={`info-block ${theme}-back-clr`}
        >
            <h3>Hi!</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Architecto eius porro mollitia excepturi <br/>esse nesciunt veritatis dolor deleniti <br/>quisquam laboriosam laudantium consequatur hic, <br/>accusamus optio dignissimos est culpa tempora. Quas.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Labore fugiat, aperiam delectus animi aliquid eligendi<br/> ea saepe tenetur deserunt odit cum, quasi quis similique eius<br/> autem nam dolorem possimus architecto!
            </p>
        </div>
    );
};

export default InfoBlock;
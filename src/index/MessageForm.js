import {Button} from "react-bootstrap";

export default function MessageForm() {
    return (
        <>
            <form className="m-5" action="http://localhost:8000/" method="POST">
                <div className="mb-3">
                    <input name="user_name" className="form-control" placeholder="ユーザー名"/>
                </div>
                <div className="mb-3">
                    <input name="text" className="form-control" placeholder="テキスト"/>
                </div>
                <Button variant="primary" type={"submit"}> SUBMIT </Button>
            </form>
        </>
    )

}

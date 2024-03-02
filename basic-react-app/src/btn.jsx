function handleFormSubmit(event) {
    event.preventDefault();
    console.log("form was submitted");
}
export default function Button() {

    return (
        <form>
            <input placeholder="write something" />
            <button onClick={handleFormSubmit}>submit</button>

        </form>
    )
}
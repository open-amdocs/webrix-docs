import getParameters from './Sandboxer.parameters';

/**
 * This component creates a button that, once clicked, will open a codesandbox with the given code.
 * We use a form to perform a POST request since a GET request is too limited in size.
 */
const Sandboxer = ({code, id}) => (
    <form action="https://codesandbox.io/api/v1/sandboxes/define" method="POST" target="_blank">
        <input type="hidden" name="parameters" value={getParameters({code, id})} />
        <input type="submit" value="Open in sandbox" />
    </form>
);

export default Sandboxer;
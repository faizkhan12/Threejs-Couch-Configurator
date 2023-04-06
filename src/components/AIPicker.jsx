import Button from "./Button";
import Spinner from "./Spinner";

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        className="aipicker-textarea"
        placeholder="Get Your own texture"
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <div className="flex flex-wrap gap-3">
        <Button
          type="filled"
          title="Try Me"
          handleClick={() => handleSubmit("full")}
          customStyles="text-xs"
        />
      </div>
    </div>
  );
};

export default AIPicker;

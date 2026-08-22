const CreateEvent = () => {
  return (
    <div>
      <h2>Create your own EVENT</h2>
      <form>
        <label htmlFor="inputEvent"></label>
        <input
          id="inputEvent"
          type="text"
          placeholder="Ultimative PartyNight"
        />
      </form>
    </div>
  );
};

export default CreateEvent;

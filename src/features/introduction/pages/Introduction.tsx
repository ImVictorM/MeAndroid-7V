const Introduction: React.FC = () => {
  return (
    <main className="max-w-content relative mx-auto flex h-full min-h-screen flex-col justify-end px-7">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <h2 className="bg-card w-fit self-end py-3 ps-15 pe-10 text-xl font-bold">
            Unit: 7V
          </h2>
          <div className="flex flex-col gap-2">
            <button className="button">Android Bodies</button>
            <button className="button">Upgrading Pods</button>
            <button className="button">Acquiring Additional Pods</button>
            <button className="button">Weapons</button>
            <button className="button">Motion Sickness</button>
            <button className="button">Back</button>
          </div>
        </div>

        <div className="bg-card px-50 pt-7 pb-30">
          <p>Hello, traveler.</p>
        </div>
      </div>
    </main>
  );
};

export default Introduction;

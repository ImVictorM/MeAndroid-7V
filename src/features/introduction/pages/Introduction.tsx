import { ButtonSquare } from "@/common/components/ui/ButtonSquare";

const Introduction: React.FC = () => {
  return (
    <main className="max-w-content relative mx-auto flex h-full min-h-screen flex-col justify-end sm:px-7">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col justify-between gap-10 sm:flex-row">
          <h2 className="bg-card border-double-accent order-2 w-fit py-3 ps-15 pe-10 text-xl font-bold text-nowrap sm:order-1 sm:self-end">
            Unit: 7V
          </h2>

          <div className="order-1 flex flex-col gap-2 self-end">
            <ButtonSquare>Android Bodies</ButtonSquare>
            <ButtonSquare>Upgrading Pods</ButtonSquare>
            <ButtonSquare>Acquiring Additional Pods</ButtonSquare>
            <ButtonSquare>Weapons</ButtonSquare>
            <ButtonSquare>Motion Sickness</ButtonSquare>
            <ButtonSquare>Back</ButtonSquare>
          </div>
        </div>

        <div className="bg-card px-10 pt-5 pb-10 lg:px-40 lg:pt-10 lg:pb-15">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Introduction;

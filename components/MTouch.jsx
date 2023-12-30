import React from "react";
import Header from "./Header";
import Image from "next/image";

const MTouch = () => {
  return (
    <>
      <div className="w-full flex items-center justify-between">
        <div className="mx-auto">
          <Header title="MTouch" />
        </div>

        <Image
          src="/assets/projects/Michigan_Wolverines_Logo.png"
          alt="img"
          width={64}
          height={64}
          className="absolute top-1 right-4"
        />
      </div>

      {/* Smaller screen content */}
      <div className="flex xl:hidden flex-col mt-4 items-center">
        <div className="flex flex-col mx-auto max-w-[268px]">
          <Image
            src="/assets/projects/mtouch/probe_diagram.png"
            alt="top_view"
            width="0"
            height="0"
            layout="responsive"
            className="pr-4 mx-auto"
          />
          <p className="brand-caption brand-text-color text-center">
            <strong>Fig. 1</strong> MTouch sensor
          </p>
        </div>
        <div className="mx-auto brand-text-color">
          Desktop Fused Filament Fabrication (FFF) 3D printers, popular for
          prototyping, face challenges in detecting print defects. Current
          solutions are often limited, expensive, or unreliable. MTouch, a
          low-cost system using an actuated contact probe, was created to
          address this issue achieving near 100% accurate defect detection of
          common print failures such as layer shifting, bed separation, and
          filament runout with minimal impact to print time. <br />
          <br />
          MTouch consists of two main components: the sensor and the controlling
          software. The sensor detects the presence or absence of print material
          using a push-pull solenoid, magnet, and hall effect sensor. A diagram
          of the sensor can be seen in <strong>Figure 1</strong>. When probing,
          the solenoid actuates downward. Then the hall effect sensor detects
          the presence of material using the position of the magnet. The
          different probing states are shown in <strong>Figure 2</strong>.{" "}
          <br />
          <br />
          <div className="flex flex-col mx-auto max-w-[268px]">
            <Image
              src="/assets/projects/mtouch/probe_probing.png"
              alt="top_view"
              width="0"
              height="0"
              layout="responsive"
              className="pr-4 mt-4 mx-auto"
            />
            <p className="brand-caption brand-text-color text-center">
              <strong>Fig. 2</strong> The three states of the sensor during use:{" "}
              <strong>a</strong> deployed position not in contact with the
              print; <strong>b</strong> deployed position in contact with a
              print; <strong>c</strong> stowed position
            </p>
          </div>
          <br />
          <br />
          The software uses a GCODE file to construct a model of the object and
          generates sample points from the model. An example is shown in{" "}
          <strong>Figure 3</strong>. The number of sample points generated is
          proportional to the cross-sectional area of the layer.
        </div>
        <div className="col-span-1 flex flex-col max-w-[268px] mx-auto">
          <Image
            src="/assets/projects/mtouch/sample_points.png"
            alt="top_view"
            width="0"
            height="0"
            layout="responsive"
            className="mx-auto"
          />
          <p className="brand-caption brand-text-color text-center">
            <strong>Fig. 3</strong> Sample points generated for a test print.
            Points where the print is expected to be detected are shown in red;
            points where the print is not expected are shown in green
          </p>
        </div>
        <br />
      </div>

      {/* Extra large screen content */}
      <div className="hidden xl:block mt-4">
        <div className="grid grid-cols-3">
          <p className="col-span-2 max-w-3xl mx-auto brand-text-color">
            Desktop Fused Filament Fabrication (FFF) 3D printers, popular for
            prototyping, face challenges in detecting print defects. Current
            solutions are often limited, expensive, or unreliable. MTouch, a
            low-cost system using an actuated contact probe, was created to
            address this issue achieving near 100% accurate defect detection of
            common print failures such as layer shifting, bed separation, and
            filament runout with minimal impact to print time. <br />
            <br />
            MTouch consists of two main components: the sensor and the
            controlling software. The sensor detects the presence or absence of
            print material using a push-pull solenoid, magnet, and hall effect
            sensor. A diagram of the sensor can be seen in{" "}
            <strong>Figure 1</strong>. When probing, the solenoid actuates
            downward. Then the hall effect sensor detects the presence of
            material using the position of the magnet. The different probing
            states are shown in <strong>Figure 2</strong>. <br />
            <br />
            The software uses a GCODE file to construct a model of the object
            and generates sample points from the model. An example is shown in{" "}
            <strong>Figure 3</strong>. The number of sample points generated is
            proportional to the cross-sectional area of the layer.
          </p>
          <div className="col-span-1 flex flex-col justify-between">
            <div className="flex flex-col mx-auto max-w-[268px]">
              <Image
                src="/assets/projects/mtouch/probe_diagram.png"
                alt="top_view"
                width="0"
                height="0"
                layout="responsive"
                className="pr-4 mx-auto"
              />
              <p className="brand-caption brand-text-color">
                <strong>Fig. 1</strong> MTouch sensor
              </p>
            </div>
            <div className="flex flex-col mx-auto max-w-[268px]">
              <Image
                src="/assets/projects/mtouch/probe_probing.png"
                alt="top_view"
                width="0"
                height="0"
                layout="responsive"
                className="pr-4 mt-4 mx-auto"
              />
              <p className="brand-caption brand-text-color">
                <strong>Fig. 2</strong> The three states of the sensor during
                use: <strong>a</strong> deployed position not in contact with
                the print; <strong>b</strong> deployed position in contact with
                a print; <strong>c</strong> stowed position
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-4 gap-4">
          <div className="col-span-1 flex flex-col max-w-[268px] mx-auto">
            <Image
              src="/assets/projects/mtouch/sample_points.png"
              alt="top_view"
              width="0"
              height="0"
              layout="responsive"
              className="mx-auto"
            />
            <p className="brand-caption brand-text-color">
              <strong>Fig. 3</strong> Sample points generated for a test print.
              Points where the print is expected to be detected are shown in
              red; points where the print is not expected are shown in green
            </p>
          </div>

          <div className="col-span-2 w-full flex flex-row max-w-3xl mx-auto justify-between">
            <div className="flex flex-col gap-4 w-[320px]">
              <Image
                src="/assets/projects/mtouch/action_small.gif"
                alt="top_view"
                width={0}
                height={0}
                layout="responsive"
                className="mx-auto"
              />
              <p className="brand-caption brand-text-color">
                <strong>Fig. 4</strong> MTouch in action - layer shift detection
              </p>
            </div>
            <div className="flex flex-col w-[320px]">
              <Image
                src="/assets/projects/mtouch/faults_tested.png"
                alt="top_view"
                width="0"
                height="0"
                layout="responsive"
                className="mx-auto"
              />
              <p className="brand-caption brand-text-color">
                <strong>Fig. 5</strong> Examples of all the faults tested in the
                fault detection validation tests: <strong>a</strong> filament
                runout/jam, <strong>b</strong> Y axis layer shift,{" "}
                <strong>c</strong> X axis layer shift, <strong>d</strong> bed
                separation, <strong>e</strong> no defects
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MTouch;

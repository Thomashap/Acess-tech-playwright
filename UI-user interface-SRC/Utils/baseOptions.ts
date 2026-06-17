export  type modifer="Alt"|"Control"|"Meta"|"Shift";
export type button="left"|"right"|"middle";

// 🔹 Fill
export interface FillOptions {
    force: boolean;
    noWaitAfter: boolean;
    timeout: number;
}

// 🔹 Default Fill Options
export interface defaultFillOptions extends FillOptions{
    force:true;
    noWaitAfter:false;
    timeout:30000;
}

// 🔹 Common Base (you can extend everywhere if needed)
export interface CommonOptions {
    timeout: number;
}

// 🔹 Click
export interface ClickOptions extends FillOptions {
    delay: number;
    clickCount: number;
    button: button;
}

// 🔹 Check / Uncheck / SetChecked
export interface CheckOptions {
    force: boolean;
    timeout: number;
}

// 🔹 Hover
export interface HoverOptions {
    force: boolean;
    timeout: number;
}

// 🔹 Press
export interface PressOptions {
    delay: number;
    timeout: number;
}

// 🔹 Type
export interface TypeOptions {
    delay: number;
    timeout: number;
}

// 🔹 SelectOption
export interface SelectOptions {
    force: boolean;
    timeout: number;
}

// 🔹 Screenshot
export interface ScreenshotOptions {
    path: string;
    timeout: number;
}

// 🔹 WaitFor
export interface WaitForOptions {
    state: "attached" | "detached" | "visible" | "hidden";
    timeout: number;
}

// 🔹 Scroll
export interface ScrollOptions {
    timeout: number;
}

// 🔹 Drag
export interface DragOptions {
    force: boolean;
    timeout: number;
}

// 🔹 Dispatch Event
export interface DispatchEventOptions {
    timeout: number;
}

// 🔹 Evaluate
export interface EvaluateOptions {
    timeout: number;
}

// 🔹 BoundingBox
export interface BoundingBoxOptions {
    timeout: number;
}

// 🔹 Blur / Focus
export interface FocusOptions {
    timeout: number;
}

// 🔹 Text Retrieval
export interface TextOptions {
    timeout: number;
}

// 🔹 Count
export interface CountOptions {
    timeout: number;
}

// 🔹 Default Objects

export const defaultFillOptions: FillOptions = {
    force: true,
    noWaitAfter: true,
    timeout: 60000,
};

export const defaultClickOptions: ClickOptions = {
    force: true,
    noWaitAfter: true,
    timeout: 60000,
    delay: 0,
    clickCount: 1,
    button: "left",
};

export const defaultCheckOptions: CheckOptions = {
    force: true,
    timeout: 60000,
};

export const defaultHoverOptions: HoverOptions = {
    force: true,
    timeout: 60000,
};

export const defaultPressOptions: PressOptions = {
    delay: 0,
    timeout: 60000,
};

export const defaultTypeOptions: TypeOptions = {
    delay: 0,
    timeout: 60000,
};

export const defaultSelectOptions: SelectOptions = {
    force: true,
    timeout: 60000,
};

export const defaultScreenshotOptions: ScreenshotOptions = {
    path: "screenshot.png",
    timeout: 60000,
};

export const defaultWaitOptions: WaitForOptions = {
    state: "visible",
    timeout: 60000,
};

export const defaultScrollOptions: ScrollOptions = {
    timeout: 60000,
};

export const defaultDragOptions: DragOptions = {
    force: true,
    timeout: 60000,
};

export const defaultDispatchEventOptions: DispatchEventOptions = {
    timeout: 60000,
};

export const defaultEvaluateOptions: EvaluateOptions = {
    timeout: 60000,
};

export const defaultBoundingBoxOptions: BoundingBoxOptions = {
    timeout: 60000,
};

export const defaultFocusOptions: FocusOptions = {
    timeout: 60000,
};

export const defaultTextOptions: TextOptions = {
    timeout: 60000,
};

export const defaultCountOptions: CountOptions = {
    timeout: 60000,
};
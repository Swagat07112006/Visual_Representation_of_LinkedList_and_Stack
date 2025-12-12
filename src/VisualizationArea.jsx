import React from "react";
import { ArrowRight, ArrowDown } from "lucide-react";

const VisualizationArea = ({ linkedList, setLinkedList, position, stack, setStack, deleteNode }) => {
    return (
        <div className="w-full flex flex-col gap-10 items-center">

            <div className="w-full max-w-full bg-slate-800 p-6 rounded-2xl shadow-xl overflow-x-auto">
                <h2 className="mb-6 text-lg font-semibold text-emerald-400">
                Linked List
                </h2>

                <div className="flex items-center">
                    {linkedList.map((node, index) => (
                        <div key={node.id} className="flex items-center">
                        
                            <div
                                className="
                                h-36
                                min-w-28
                                p-4
                                rounded-xl
                                bg-slate-900
                                border
                                border-emerald-400
                                flex
                                flex-col
                                items-center
                                justify-between
                                shadow-md
                                overflow-auto
                                "
                            >
                                <div className="flex flex-col items-center">
                                    <p className="text-xs text-slate-400">Index: {index}</p>
                                    <h2 className="text-3xl mt-4 text-slate-100">
                                        {node.value}
                                    </h2>
                                </div>

                                <button
                                    onClick={() => deleteNode(node.id)}
                                    className="
                                        bg-red-500
                                        px-2
                                        py-1
                                        rounded
                                        text-xs
                                        text-white
                                        hover:bg-red-600
                                        transition
                                    "
                                >
                                Delete
                                </button>
                            </div>

                            {index < linkedList.length - 1 && (
                                <div className="px-3 flex items-center">
                                    <ArrowRight
                                        className="text-emerald-400"
                                        size={36}
                                        strokeWidth={2.5}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full max-w-md bg-slate-800 p-6 rounded-2xl shadow-xl">
                <h2 className="mb-6 text-lg font-semibold text-emerald-400">
                Stack
                </h2>

                <div className="border border-dashed border-slate-600 p-4 flex flex-col items-center rounded-xl min-h-[200px]">
                    {stack.length === 0 ? (
                        <div className="text-center text-slate-400 text-sm">
                            <h4>Stack is Empty</h4>
                            <p>Delete a node to push into stack</p>
                        </div>
                    ) : (
                        stack.map((node, index) => (
                        <div key={index} className="flex flex-col items-center">

                            <div className="bg-emerald-500 text-slate-900 p-3 rounded-xl min-w-36 shadow font-semibold">
                                <div className="flex justify-between text-xs mb-2">
                                    <p>Index: {index}</p>
                                    {index === 0 && <p>Top</p>}
                                </div>

                                <h1 className="text-center">
                                    {node.value}
                                </h1>
                            </div>

                            {index < stack.length - 1 && (
                            <ArrowDown
                                className="text-emerald-400 my-2"
                                size={32}
                                strokeWidth={2.5}
                            />
                            )}
                        </div>
                        ))
                    )}

                    <div className="flex justify-center">
                        <button
                        className="
                            mt-5
                            px-4
                            py-2
                            rounded-lg
                            bg-red-500
                            text-white
                            font-semibold
                            hover:bg-red-600
                            transition
                        "
                        onClick={() => setStack(stack.slice(1))}
                        hidden={stack.length === 0}
                        >
                        Pop
                        </button>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default VisualizationArea;

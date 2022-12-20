import React from 'react';

const UiToggleBtn = () => {
    return (
        <div>
            <div class="mb-3">
                <div class="relative inline-block w-10 mr-2 align-middle select-none">
                    <input type="checkbox" name="toggle" id="Blue" class="checked:bg-blue-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                    <label for="Blue" class="block h-6 overflow-hidden bg-gray-300 rounded-full cursor-pointer">
                    </label>
                </div>
            </div>
        </div>
    );
};

export default UiToggleBtn;
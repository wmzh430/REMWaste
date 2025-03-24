import Button from "./Button"
import { IFootBar } from "@/config/interface"

const FooterBar = ({ size, date }: IFootBar) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-default border-t border-secondary p-4 animate-slideUp z-50">
      <div className="max-w-7xl mx-auto">
        <div className="lg:hidden">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium"></h3>
            <div>
              <span className="text-lg font-bold text-primary">£</span>
              <span className="text-sm text-gray-400 ml-2">{date} days</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Button value="Back" type="secondary" isIcon={false} />
            <Button value="Continue" type="primary" isIcon={false} />
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="ml-6">
              <span className="text-2xl font-bold text-primary">£</span>
              <span className="text-sm text-gray-400 ml-2">
                {date} day hire
              </span>
            </div>
            <div>
              <h3 className="font-medium"></h3>
              <p className="text-sm text-gray-400 mt-2">{size}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button value="Back" type="secondary" isIcon={false} />
            <Button value="Continue" type="primary" isIcon={true} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterBar

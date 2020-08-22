import Head from 'next/head'
import { Component } from 'react';


class Page extends Component <any, any> {
    public Title: string;
    public Children: React.ReactNode;

    constructor(props: any) {
        super(props);
        this.Title = props.title;
        this.Children = props.children;
    }

    render() {
        return (
            <>
              <Head>
                <title>{this.Title || 'A default page title'}</title>
              </Head>
              <div>
                {this.Children}
              </div>
            </>
        )
    }
}
export default Page;

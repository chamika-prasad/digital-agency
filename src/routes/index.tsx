import { Routes, Route } from 'react-router-dom'
import { Layout } from 'components/templates'
import { HomePage, AboutUsPage, ProductsPage, ServicesPage, ContactUsPage } from 'components/pages'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />} >
                <Route index element={<HomePage />} />
                <Route path='/about' element={<AboutUsPage />} />
                <Route path='/products' element={<ProductsPage />} />
                <Route path='/services' element={<ServicesPage />} />
                <Route path='/contact' element={<ContactUsPage />} />
            </Route>
        </Routes>
    )
}